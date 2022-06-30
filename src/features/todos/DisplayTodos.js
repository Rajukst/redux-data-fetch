import React from "react";
import { Col, Card } from "react-bootstrap";
const DisplayTodos = ({allTodos}) => {
    const { id, title}= allTodos;
  return (
    <div>
      <Col>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            {/* <Card.Title>UserId: {userId}</Card.Title> */}
            <Card.Title>Id No:{id}</Card.Title>
            <Card.Text>
             {title}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DisplayTodos;
