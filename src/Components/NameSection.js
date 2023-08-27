import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import '../styles/scss/Section.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; 



function NameSection() {
    return (
        <Container className='namesection'>
            <Row className='name-and-picture'>
                <Col lg={4}>
                    <div className='picture-frame'>
                    <picture>
                        <img src='/images/CV-selfie.jpg' alt='me'></img>
                    </picture>
                    </div>
                </Col>
                <Col className='d-flex align-items-center' lg={8}>
                    <h1 className='name'>Terrinia Schoelitsz</h1>
                </Col>
            </Row>
            <Row className='carousel'>
                <Col>
                    <Carousel interval={10000}>
                        <Carousel.Item>
                            <div className='carousel-content'>
                                <h1>Hi, I'm Terri</h1>
                                <p>
                                    <ul>
                                        <li>
                                            I'm a Junior Software Developer with a <strong>Creative Soul</strong>.
                                        </li>
                                        <li>
                                            Love playing with <strong>front-end</strong>, fascinated by <strong>back-end</strong>,
                                            but my ambitions for the future are in <strong>Machine Learning and Embedded software</strong> 
                                            to one day contribute to the impact <strong>A.I. devices</strong> have on consumers and 
                                            hopes of a <strong>sustainable world</strong>.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='carousel-content'>
                                <h1>My qualities</h1>
                                <p>
                                    <ul>
                                        <li><strong>Persistent:</strong> I'm not afraid to go down the rabbit hole</li>
                                        <li><strong>Ambitious:</strong> I believe in launching myself out of my comfort zone and I'm not scared to fail</li>
                                        <li><strong>Reflective:</strong> It's not about eliminating flaws, it's about knowing them</li>
                                        
                                    </ul>
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='carousel-content'>
                                <h1>My challenges</h1>
                                <p>
                                    <ul>
                                        <li><strong>Stubborn:</strong> Sometimes someone needs to pull me out of the rabbit hole</li>
                                        <li><strong>Insecure:</strong> Especially at the start will I look for a lot of validation</li>
                                    </ul>
                                </p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <Button> Contact</Button>
                </Col>
            </Row> */}
        </Container>
    );
}

export default NameSection;