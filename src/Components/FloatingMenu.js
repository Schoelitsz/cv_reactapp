import React, { useState, useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import '../styles/scss/menu.scss';

function FloatingMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1) {
        setShow(false);
        document.body.style.overflow = 'auto';
      } else {
        setShow(true);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up by resetting the body overflow style
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="floating-menu">
      {/* <Button variant="primary" onClick={handleShow}>
        Open Menu
      </Button> */}

      <Offcanvas show={show} onHide={handleClose} placement="start" backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default FloatingMenu;
