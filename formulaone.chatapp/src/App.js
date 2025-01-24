import { Container, Col, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import WaitingRoom from './components/WaitingRoom'
import ChatRoom from './components/ChatRoom';

function App() {
  const[conn, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  const joinChatRoom = async (name, chatroom) => {
    try{
      // initiate a connection
      const conn = new HubConnectionBuilder()
                          .withUrl("https://localhost:7290/chat")
                          .configureLogging(LogLevel.Information)
                          .build();
      
      // set up handler
      conn.on("JoinSpecificChatRoom", (name, msg) => {
        console.log("msg: ", msg);
      });

      conn.on("ReceiveSpecificMessage", (name, msg) => {
        console.log("ReceiveSpecificMessage triggered", name, msg);
        setMessages(messages => [...messages, {name,msg}]);
        setCurrentUser(name);
        console.log('current user name: ',currentUser);
      });
      

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", {name, chatroom});

      setConnection(conn);
    } catch(e) {
      console.log(e);
    }
  }

  const sendMessage = async(message) => {
    try{
      await conn.invoke("SendMessage", message);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div>
      <main>
        <Container>
          <Row className='px-5 py-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>Welcome to the F1 Chat App</h1>
            </Col>
          </Row>
          {
            !conn
            ? <WaitingRoom joinChatRoom={joinChatRoom}/>
            : <ChatRoom messages={messages} sendMessage={sendMessage} currentUser={currentUser}/>
          }
        </Container>
      </main>
    </div>
  );
}

export default App;
