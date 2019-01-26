import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import "./components.css"

const BookCard = ({title, author, link, description, image, handleBookSave }) => {
  return (
    <div>
      <Card>
        <CardImg className="bookImg" top width="100%" src={image} alt={title} />
        <CardBody>
          <CardTitle><h3>{title}</h3></CardTitle>
          <CardSubtitle><h5>Written By {author}</h5></CardSubtitle>
          <CardText><p>{description}</p></CardText>
          <Row>
          <Col>
          <Button color="secondary"><a target="_blank" rel="noopener noreferrer" href={link}>
              View Online
            </a>
          </Button>
          </Col>
          <Col>
          <Button color="success" onClick={handleBookSave}
          type="submit"> Save Book!</Button>
          </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BookCard;