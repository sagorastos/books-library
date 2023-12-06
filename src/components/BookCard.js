import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { deleteBook } from '../api'
import { useNavigate } from 'react-router-dom';

function BookCard({ id, title, author, imagePath }) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Συγγραφέας: {author}
        </Card.Text>
        <Row>
          {/* <Col><Button variant="primary">Details</Button></Col> */}
          <Col>
            <Button
              variant="secondary"
              // onClick={() => {
              //   deleteBook(id)
              //   navigate("/");
              // }}
              onClick={() => {
                navigate(`/books/${id}`)
              }}
            >View</Button></Col>
            <Col>
            <Button
              variant="danger"
              onClick={() => {
                deleteBook(id)
                navigate("/");
              }}
              
            >Delete</Button></Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default BookCard