import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/scss/Section.scss';

function NameSection() {
    return (
        <Container className='namesection'>
            <Row>
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

            {/* iconskills goes here */}
        </Container>
    
    );
}

export default NameSection;