import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

function BookCard({id, title, author, imagePath}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Συγγραφέας: {author}
        </Card.Text>
        <Row>
        <Col><Button variant="primary">Details</Button></Col>
        <Col><Button variant="danger">Delete</Button></Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default BookCard