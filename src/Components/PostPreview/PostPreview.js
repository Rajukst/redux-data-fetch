import React from 'react';
import { Col, Card} from 'react-bootstrap';
const PostPreview = ({allData}) => {
    const {id, title, body}= allData;
    return (
        <Col>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Text>
           {body}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default PostPreview;