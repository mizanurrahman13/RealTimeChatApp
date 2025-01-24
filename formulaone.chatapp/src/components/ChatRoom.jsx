// import { Col, Row } from "react-bootstrap";
// import MessageContainer from "./MessageContainer";
// import SendMessageFrom from "./SendMessageForm";

// const ChatRoom = ({messages, sendMessage}) =>{
//     console.log("chatroom " + messages);
//     return <div>
//         <Row className="px-5 py-5">
//             <Col sm={10}>
//                 <h2>ChatRoom</h2>
//             </Col>
//             <Col>

//             </Col>
//         </Row>
//         <Row className="px-5 py-5">
//             <Col sm={12}>
//                 <MessageContainer messages={messages} />
//             </Col>
//             <Col sm={12}>
//                 <SendMessageFrom sendMessage={sendMessage} />
//             </Col>
//         </Row>
//     </div>
// }
// export default ChatRoom;

// import { Col, Row } from "react-bootstrap";
// import MessageContainer from "./MessageContainer";
// import SendMessageForm from "./SendMessageForm";
// import './ChatRoom.css';

// const ChatRoom = ({ messages, sendMessage }) => {
//     console.log("chatroom " + messages);
//     return (
//         <div className="chat-room">
//             <Row className="header px-5 py-3">
//                 <Col sm={12}>
//                     <h2>Chat Room</h2>
//                 </Col>
//             </Row>
//             <Row className="messages px-5 py-3">
//                 <Col sm={12}>
//                     <MessageContainer messages={messages} />
//                 </Col>
//             </Row>
//             <Row className="send-message-form px-5 py-3">
//                 <Col sm={12}>
//                     <SendMessageForm sendMessage={sendMessage} />
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default ChatRoom;

import { Col, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import './ChatRoom.css';

const ChatRoom = ({ messages, sendMessage, currentUser }) => {
    console.log("chatroom ", messages);
    return (
        <div className="chat-room">
            <Row className="header px-5 py-3">
                <Col sm={12}>
                    <h2>Chat Room</h2>
                </Col>
            </Row>
            <Row className="messages px-5 py-3">
                <Col sm={12}>
                    <MessageContainer messages={messages} currentUser={currentUser} />
                </Col>
            </Row>
            <Row className="send-message-form px-5 py-3">
                <Col sm={12}>
                    <SendMessageForm sendMessage={sendMessage} />
                </Col>
            </Row>
        </div>
    );
};

export default ChatRoom;



