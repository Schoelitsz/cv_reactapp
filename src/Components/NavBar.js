import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/scss/navigationbar.scss';
//import githubIcon from '';

function SocialMediaBar() {
  return (
    <Navbar className='navigation-bar'>
      <Nav className='nav'>
        <Nav.Link>
            <img src='/images/github-icon.svg' alt="github" className="icon" />
        </Nav.Link>
        <Nav.Link>
        <img src='/images/linkedin.svg' alt="github" className="icon" />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default SocialMediaBar;
