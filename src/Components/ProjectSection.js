import React from 'react';
import {Container, Card, Row, Col } from 'react-bootstrap';

function ProjectCards() {
  return (
    <Container className='project-section' id="Projects">
        <h1>Projects</h1>
        <Row>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
        </Row>
  </Container>
    
  );
}

export default ProjectCards;
