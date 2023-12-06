import React, { useState } from 'react'
import { Button, Container, Form, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../api';


function AddBook() {
    const [title, setTitle] = useState("");
    const [imagepath, setImagePath] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    const modifyCourseData = async () => {
        const data = {
            title: title,
            imagePath: imagepath,
            author: author,
        };
        await addBook(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('You have submitted');
    }

    return (
        <Container className="square border border-2 mt-4">
            <h3 className='mt-3'>Add Book</h3>
            <Row className="justify-content-md-center">
                <Col lg="6">
                    <hr></hr>
                </Col></Row>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" key={"title"} controlId={title}>
                    <Form.Label>Title</Form.Label>
                    <Row className="justify-content-md-center">
                        <Col lg="6">
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                value={title}
                                name="title"
                                onChange={(e) => setTitle(e.target.value)}
                            /></Col></Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Row className="justify-content-md-center">
                        <Col lg="6">
                            <Form.Control
                                type="text"
                                placeholder="Author"
                                value={author}
                                name="author"
                                onChange={(e) => setAuthor(e.target.value)}
                            /></Col></Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Row className="justify-content-md-center">
                        <Col lg="6">
                            <Form.Control
                                type="text"
                                placeholder="Image Path"
                                value={imagepath}
                                name="ImagePath"
                                onChange={(e) => setImagePath(e.target.value)}
                            /></Col></Row>
                </Form.Group>
                <Button
                    variant="outline-secondary"
                    className='float-right mb-3'
                    onClick={() => {
                        modifyCourseData();
                        navigate("/");
                    }}
                >Add Book</Button>
            </Form>

        </Container >
    )
}

export default AddBook