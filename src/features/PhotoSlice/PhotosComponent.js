import React from 'react';
import {Col, Card} from "react-bootstrap"
const PhotosComponent = ({allPhotos}) => {
    const {id,title,url} = allPhotos;
    return (
        <div>
           <Col>
      <Card>
        <Card.Img variant="top" src={url}/>
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Text>
            {title}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default PhotosComponent;