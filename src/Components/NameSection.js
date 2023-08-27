import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../styles/scss/Section.scss';

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
                    <Carousel>
                        <Carousel.Item>
                            <div>
                                <h1>Hi, I'm Terri</h1>
                                <p>
                                I'm a Junior Developer with a creative soul. I love playing with front-end, I'm fascinated by back-end.
                                But my ambitions and hope is a future in machine learning and embedded software to one day contribute to the impact
                                a.i. devices have on consumers and a sustainable world.
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <h1>Things I love</h1>
                                <p>
                                Embedded software, a.i., cyber security.
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <h1>My qualities</h1>
                                <p>
                                Persistent, ambitious, reflective
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <h1>My challenges</h1>
                                <p>
                                Struggle to let a lot cause go, crave professional validation and guidance
                                </p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

        </Container>
    
    );
}

export default NameSection;