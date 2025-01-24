using FormulaOne.ChatService.DataService;
using FormulaOne.ChatService.Models;
using Microsoft.AspNetCore.SignalR;

namespace FormulaOne.ChatService.Hubs;

public class ChatHub : Hub
{
    private readonly SharedDb _sharedDb;

    public ChatHub(SharedDb sharedDb)
    {
        _sharedDb = sharedDb;
    }
    public async Task JoinChat(UserConnection connection)
    {
        await Clients.All.SendAsync("ReveiveMessage", "admin", $"{connection.Name} has joined");
    }

    public async Task JoinSpecificChatRoom(UserConnection connection)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);

        _sharedDb.connections[Context.ConnectionId] = connection;

        await Clients.Group(connection.ChatRoom)
            .SendAsync("JoinSpecificChatRoom", "admin", $"{connection.Name} has joined {connection.ChatRoom}");
    }

    public async Task SendMessage(string msg)
    {
        if (_sharedDb.connections.TryGetValue(Context.ConnectionId, out UserConnection connection))
        {
            await Clients.Group(connection.ChatRoom)
                .SendAsync("ReceiveSpecificMessage", connection.Name, msg);
        }
    }
}
