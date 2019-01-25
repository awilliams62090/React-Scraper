import React, {Component} from "react";
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Card
} from "reactstrap";
import BookApi from "../utils/BookApi";
import BookCard from "../components/BookCard";
import SearchForm from "../components/SearchForm";


class Home extends Component {
    state = {
        books: [],
        q: "",
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    getBooks = () => {
        BookApi
            .getBooks(this.state.q)
            .then(res => this.setState({books: res.data}))
            .catch(() => this.setState({books: [], message: "No books found! Try a different book!"}));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
        this.setState({q: ""})
    };

    handleBookSave = id => {
        const book = this
            .state
            .books
            .find(book => book.id === id);

        BookApi
            .saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        })
            .then(() => this.getBooks());
    };

    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1 className="text-center">
                        <strong>Google Books Search</strong>
                    </h1>
                    <h2 className="text-center">Search for your favorite books, and become a worm, a BOOK WORM!</h2>
                </Jumbotron>
                <Row>
                    <Col size="md-12">
                        <Card title="Book Search" icon="far fa-book">
                            <SearchForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                q={this.state.q}/>
                        </Card>
                    </Col>
                </Row>
                <Row>

                    {this.state.books.length
                        ? (
                            <Col size="lg-4 md-6 sm-12 ">
                                {this
                                    .state
                                    .books
                                    .map(book => (<BookCard
                                        key={book.id}
                                        title={book.volumeInfo.title}
                                        subtitle={book.volumeInfo.subtitle}
                                        link={book.volumeInfo.infoLink}
                                        author={book
                                        .volumeInfo
                                        .authors
                                        .join(", ")}
                                        description={book.volumeInfo.description}
                                        image={book.volumeInfo.imageLinks.thumbnail}
                                        Button={() => (
                                        <button
                                            onClick={() => this.handleBookSave(book.id)}
                                            className="btn btn-primary ml-2">
                                            Save
                                        </button>
                                    )}/>))}
                            </Col>
                        )
                        : (
                            <h2 className="text-center">{this.state.message}</h2>
                        )}

                </Row>
            </Container>
        );
    }
}

export default Home;