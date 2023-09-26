import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import '../styles/scss/Section.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react"; 

const userApiUrl = 'https://cv-server.azurewebsites.net/api/user';
const latestEducationApiUrl = 'https://cv-server.azurewebsites.net/api/latestEducation';

function NameSection() {
    const [user, setUser] = useState({ name: '' });

  useEffect(() => {
    fetch(userApiUrl)
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
    }, []); 

    const [latestEducation, setLatestEducation] = useState({ latestEducation: ''})

    useEffect(() => {
    fetch(latestEducationApiUrl)
            .then(response => response.json())
            .then(data => {
                setLatestEducation(data);
            })
            .catch(error => {
                console.error('Error fetching educationdata:', error);
            });
    }, []);
    
    return (
        <Container className='namesection' id="Home">
            <Row className='name-and-picture'>
                <Col lg={4}>
                    <div className='picture-frame'>
                    <picture>
                        <img src='/images/CV-selfie.jpg' alt='me' className='frame-image'></img>
                    </picture>
                    </div>
                </Col>
                <Col className='d-flex align-items-center' lg={4}>
                    <h1 className='name'>{user.fullname}</h1>

                </Col>
            </Row>
            <Row className='carousel'>
                <Col>
                    <Carousel interval={10000}>
                        <Carousel.Item className='carousel-content'>
                            <ul>
                                <li>
                                    <strong>Current occupation: </strong>
                                    <h2>Looking for a new challenge!</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>Education: </strong>
                                    <h2>Associate Degree Software Engineering at zuyd Hogeschool</h2>
                                </li>
                            </ul>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='carousel-content'>
                                <h1>Hi, I'm Terri</h1>
                                <ul>
                                    <li>
                                        I'm a Junior Software Engineer with a <strong>Creative Soul</strong>.
                                    </li>
                                    <li>
                                        Love playing with <strong>front-end</strong>, fascinated by <strong>back-end</strong>,
                                        but my ambitions for the future are in <strong>Machine Learning and Embedded software</strong>  
                            
                                    </li>
                                    <li>
                                        I currently have an Associate Degree in IT specialized in Software Engineering
                                    </li>
                                    <li>
                                        I wish to duo-specialize in C# .Net, Python PyQt, to enable my road to embedded software, machine learning and eventually a.i.
                                    </li>
                                    <li>
                                        I do not intend for AD to be my last Diploma 
                                    </li>
                                </ul>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='carousel-content'>
                                <h1>My qualities</h1>
                                <ul>
                                    <li><strong>Persistent:</strong> I'm not afraid to go down the rabbit hole</li>
                                    <li><strong>Ambitious:</strong> I believe in launching myself out of my comfort zone and I'm not scared to fail</li>
                                    <li><strong>Reflective:</strong> It's not about eliminating flaws, it's about knowing them</li>
                                    
                                </ul>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='carousel-content'>
                                <h1>My challenges</h1>
                                <ul>
                                    <li><strong>Stubborn:</strong> Sometimes someone needs to pull me out of the rabbit hole</li>
                                    <li><strong>Insecure:</strong> Especially at the start will I look for a lot of validation</li>
                                </ul>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='carousel-content'>
                                <h1>Where do I see myself in the future</h1>
                                    <li>
                                        I want to specialize in Python.
                                    </li>
                                    <li>
                                        In my spare time I learn what I can about algorithm, machine learning and a.i. 
                                    </li>
                                    <li>
                                        Virtual reality, augmented reality and a.i. assisting our day to day life is our future, and I aspire to become part of the evolution and contribute to a new, sustainable and modern world.
                                    </li>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className='contact-row'>
                <Col className='contact-col'>
                    <Button className='contact-button'>
                        <a href='#Contact'>Contact</a>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NameSection;