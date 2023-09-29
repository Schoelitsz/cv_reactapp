import React, {useState} from 'react';
import {Container, Card, Row, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFaceKissWinkHeart} from '@fortawesome/free-solid-svg-icons';

const cardsArray = [
  { card: 'card1', title: "TopVintage", subtitle: "Detached team via Etesian IT Con.", text: "While working at Etesian I had the honour to contribute to the restyling of Top Vintage's commercial website.Mainly focusing on front-end, I used HTML, SCSS, Javascript/Jquery to style the website as per the product owner's design. I also got the opportunity to implement features into the PHP code, allowing me to get to know the language on a practical level. During this project, we worked Scrum, with prints, refinements and daily stand-ups."},
  { card: 'card1', title: "My Online Resume", subtitle: "Refering to this website", text: "I created this website through React JS and learned the framework from scratch"},
  { card: 'card1', title: "Empty", subtitle: "Empty", text: "Empty"}

];

function ProjectCards() {
  const [showFullText, setShowFullText] = useState(false);
  const toggleFullText = () => setShowFullText(!showFullText);

  // const textToShow = showFullText ? {cardsArray.text} : {cardsArray.text}.slice(0, 200); 

  return (
    <Container className='project-section' id="Projects">
        <h1>Projects</h1>
        <Row>
            {cardsArray.map((card, index) => (
              <Col key={index}>
                <Card style={{ width: '18rem' }} className='project-card'key={card}>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{card.subtitle}</Card.Subtitle>
                      <Card.Text>
                        {showFullText ? card.text : `${card.text.slice(0, 200)}...`}
                        {card.text.length > 200 && (
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
            ))}
        </Row>
  </Container>
  );
}

export default ProjectCards;
