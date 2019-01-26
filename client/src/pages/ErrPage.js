import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';


function ErrPage() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="no-books-here">
                <img src="./no-books.png" alt="no-books-here"/>
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrPage;
