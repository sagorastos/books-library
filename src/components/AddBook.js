import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
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
        <Container>
            <h1>Add Book</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" key={"title"} controlId={title}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        value={title}
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Author"
                        value={author}
                        name="author"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>ImagePath</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Image Path"
                        value={imagepath}
                        name="ImagePath"
                        onChange={(e) => setImagePath(e.target.value)}
                    />
                </Form.Group>
                <Button
                    variant='primary'
                    className='float-right'
                    onClick={() => {
                        modifyCourseData();
                        navigate("/");
                    }}
                >Add Book</Button>
            </Form>

        </Container>
    )
}

export default AddBook