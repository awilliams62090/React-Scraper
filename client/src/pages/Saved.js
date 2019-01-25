import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Card } from "reactstrap";
import BookCard from "../components/BookCard";
import BookApi from "../utils/BookApi";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    BookApi.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    BookApi.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
              <h2 className="text-center">Got to the search page to get reading!!</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            
              {this.state.books.length ? (
              <Card title="Saved Books" >
                  {this.state.books.map(book => (
                    <BookCard
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </Card>
              ) : (
                <h2 className="text-center">No Saved Books Yet :(</h2>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
