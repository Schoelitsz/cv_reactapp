import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFile, faHeart, faComputerMouse, faPhone, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import '../styles/scss/sidemenu.scss';

const SideMenu = () => {
  return (
    <Nav className="side-menu">
      <Nav.Item>
        <Nav.Link href="#Home">
            <FontAwesomeIcon className='icon' icon={faStar} />
            About Me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Resume">
            <FontAwesomeIcon className='icon' icon={faFile} />
            Resume
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Skills">
            <FontAwesomeIcon className='icon' icon={faHeart} />
            Skills
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Projects">
            <FontAwesomeIcon className='icon' icon={faComputerMouse} />
            Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Contact">
              <FontAwesomeIcon className='icon' icon={faPhone} />
            Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#About">
              <FontAwesomeIcon className='icon' icon={faCircleInfo} />
            About this App
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SideMenu;
