import React, { useEffect, useState } from 'react'
import { fetchBooks } from '../api';
import BookCard from './BookCard';
import { Row, Col, Container } from 'react-bootstrap';

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetshData = async () => {
      const responseBooks = await fetchBooks();
      setBooks(responseBooks);
    };
    
    fetshData();
  }, []);



  return (
    <div>
      <Container>
        <h2>All Books</h2>
        <Row>
          {books.map((data) => (
            <Col md="3" className="mt-2">
              <BookCard key={data.id} {...data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Books