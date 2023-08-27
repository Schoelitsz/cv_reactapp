import React from 'react';
import {Container, Card } from 'react-bootstrap';

function ProjectCards() {
  return (
    <Container className='project-section'>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card link</Card.Link>
          <Card.Link href="#">Another link</Card.Link>
        </Card.Body>
      </Card>
  </Container>
    
  );
}

export default ProjectCards;
