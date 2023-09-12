import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/scss/Section.scss';

function ContactSection() {
    return(
        <Container id='Contact' className='contact-section'>
            <Row>
                <h1>Contact</h1>
                <h3>This form doesn't work yet</h3>
                <Col>
                    <Form className='contact-form'>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            //value={name}
                            //onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            //value={email}
                            //onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Type your message"/>
                        </Form.Group>

                        <Button className='submitcontact-button' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;