import React, {useState} from 'react';
import {Container, Card, Row, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFaceKissWinkHeart} from '@fortawesome/free-solid-svg-icons';
function ProjectCards() {

  const [showFullText, setShowFullText] = useState(false);
  const toggleFullText = () => setShowFullText(!showFullText);

  const cardText = `While working at Etesian I had the honour to contribute to the restyling of Top Vintage's commercial website. 
    Mainly focusing on front-end, I used HTML, SCSS, Javascript/Jquery to style the website as per the product owner's design.
    I also got the opportunity to implement features into the PHP code, allowing me to get to know the language on a practical level.
    During this project, we worked Scrum, with prints, refinements and daily stand-ups.`;

  // Determine whether to show the full text or a truncated version
  const textToShow = showFullText ? cardText : cardText.slice(0, 200); // Adjust the character limit as needed

  return (
    <Container className='project-section' id="Projects">
        <h1>Projects</h1>
        <Row>
          <Col>
              <Card style={{ width: '18rem' }} className='project-card'>
              <Card.Body>
                <Card.Title>TopVintage</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Detached team via Etesian IT Con.</Card.Subtitle>
                    <Card.Text>
                      {textToShow}
                      {cardText.length > 200 && (
                      <Button variant="link" onClick={toggleFullText}>
                          {showFullText ? 'Read Less' : 'Read More'}
                      </Button>
                      )}
                    </Card.Text>
                  <Card.Link href="#">Card link</Card.Link>
                  <Card.Link href="#">Another link</Card.Link>
              </Card.Body>
              </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className='project-card'>
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
          <Card style={{ width: '18rem' }} className='project-card'>
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
