import React from 'react';
import '../styles/scss/Section.scss';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
// import { getIconSkills } from '.';
//import { getIconSkills } from '../../../server/Controllers/SkillsController';

 const iconSkillsArray = ['bootstrap', 'scrum', 'mysql', 'github', 'visualstudiocode'];

function IconSkillSection() {
    return (
        <div className='iconSkillSection'>
            <Row>
                {iconSkillsArray.map(skill => (
                    <Col>
                        <div className='skilldiv'>
                            <img src={`/images/${skill}.png`} alt={`${skill}.png`} />
                            <h3>{skill}</h3>
                        </div>
                    </Col>
                ))}
             </Row>
        </div>
    );
}



export {IconSkillSection};

