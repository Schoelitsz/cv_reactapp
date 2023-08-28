import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFile, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/scss/sidemenu.scss'; // Add your CSS file for styling

const SideMenu = () => {
  return (
    <Nav className="side-menu">
      <Nav.Item>
        <Nav.Link href="#home">
            <FontAwesomeIcon className='icon' icon={faStar} />
            About Me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#profile">
            <FontAwesomeIcon className='icon' icon={faFile} />
            Resume
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#settings">
            <FontAwesomeIcon className='icon' icon={faHeart} />
            Skills
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SideMenu;