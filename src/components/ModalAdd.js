import React, { useState } from 'react'
import { Button, Container, Form, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../api';

function ModalAdd(props) {
    const [title, setTitle] = useState("");
    const [imagepath, setImagePath] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();
    const reload=()=>window.location.reload();

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
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title  id="contained-modal-title-vcenter">
                    Add New Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" key={"title"} controlId={title}>
                            <Form.Label>Title</Form.Label>
                            <Row className="justify-content-md-center">
                                <Col lg="10">
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
                                <Col lg="10">
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
                                <Col lg="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Image Path"
                                        value={imagepath}
                                        name="ImagePath"
                                        onChange={(e) => setImagePath(e.target.value)}
                                    /></Col></Row>
                        </Form.Group>
                    </Form>

                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        modifyCourseData();
                        navigate("/books");
                        props.onHide();
                        reload();
                    }}
                >Add Book</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAdd