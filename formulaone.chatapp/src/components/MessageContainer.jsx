// import { Card } from 'react-bootstrap';
// import './MessageContainer.css';

// const MessageContainer = ({ messages }) => {
//     return (
//         <div className="message-container">
//             {messages.length > 0 ? (
//                 messages.map((msg, index) => (
//                     <Card className="message-card" key={index}>
//                         <Card.Body>
//                             <Card.Title>{msg.name}</Card.Title>
//                             <Card.Text>{msg.msg}</Card.Text>
//                         </Card.Body>
//                     </Card>
//                 ))
//             ) : (
//                 <p>No messages</p>
//             )}
//         </div>
//     );
// };

// export default MessageContainer;

// import { Card } from 'react-bootstrap';
// import './MessageContainer.css';

// const MessageContainer = ({ messages }) => {
//     return (
//         <div className="message-container">
//             {messages.length > 0 ? (
//                 messages.map((msg, index) => (
//                     <div className="message-bubble" key={index}>
//                         <div className="message-sender">{msg.name}</div>
//                         <div className="message-text">{msg.msg}</div>
//                     </div>
//                 ))
//             ) : (
//                 <p>No messages</p>
//             )}
//         </div>
//     );
// };

// export default MessageContainer;

import './MessageContainer.css';

const MessageContainer = ({ messages, currentUser }) => {
    return (
        <div className="message-container">
            {messages.length > 0 ? (
                messages.map((msg, index) => (
                    <div 
                        className={`message-bubble ${msg.name === currentUser ? 'self' : ''}`} 
                        key={index}
                    >
                        <div className="message-sender">{msg.name}</div>
                        <div className="message-text">{msg.msg}</div>
                    </div>
                ))
            ) : (
                <p>No messages</p>
            )}
        </div>
    );
};

export default MessageContainer;



