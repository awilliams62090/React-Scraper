import React, {Component} from "react";
import {
    Button,
    Jumbotron,
    Container,
    Row,
    Col,
    Card
} from "reactstrap";
import BookApi from "../utils/BookApi";
import BookCard from "../components/BookCard";
import SearchForm from "../components/SearchForm";
import {List} from "../components/List";

class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Search for a book to get reading!!"
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
                    <h2 className="text-center">Search for and Save Books of Interest.</h2>
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
                    <Col size="sm-12 md-6 lg-4">
                            {this.state.books.length
                                ? (
                                    <List>
                                        {this
                                            .state
                                            .books
                                            .map(book => (<BookCard
                                                key={book.id}
                                                title={book.volumeInfo.title}
                                                subtitle={book.volumeInfo.subtitle}
                                                link={book.volumeInfo.infoLink}
                                                authors={book
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
                                    </List>
                                )
                                : (
                                    <h2 className="text-center">{this.state.message}</h2>
                                )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;