import { useState } from "react"
import { Button, Row, Form, Col } from "react-bootstrap";

const WaitingRoom = ({ joinChatRoom}) => {
    const[name, setName] = useState();
    const[chatroom, setChatroom] = useState();

    return <Form onSubmit={e => {
        e.preventDefault();
        joinChatRoom(name, chatroom);
        }
    }>
        <Row className="px-5 py-5">
            <Col sm={12}>
                <Form.Group>
                    <Form.Control placeholder='Name' 
                        onChange={e => setName(e.target.value)} />

                    <Form.Control placeholder='ChatRoom' 
                        onChange={e => setChatroom(e.target.value)} />
                </Form.Group>
            </Col>
            <Col sm={12}>
                <hr />
                <Button variant='success' type="submit">Join</Button>
            </Col>
        </Row>

    </Form>
}

export default WaitingRoom