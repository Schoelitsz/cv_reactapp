import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/scss/menu.scss'
import {useState} from 'react';
import {Button, Offcanvas} from 'react-bootstrap';



function FloatingMenu() {
    const [show, setshow] = useState(false);

    const handleClose = () => setshow(false);
    const handleShow = () => setshow(true);

    return (
    
        
        <div className='floating-menu'>

            <Button variant="primary" onClick={handleShow}>
                Open Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='start'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default FloatingMenu;