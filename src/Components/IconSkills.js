import React from 'react';
//import '../styles/section.scss';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
// import { getIconSkills } from '.';
//import { getIconSkills } from '../../../server/Controllers/SkillsController';

 const iconSkillsArray = ['bootstrap', 'scrum', 'mysql', 'github', 'visualstudiocode'];

function IconSkillSection() {
    return (
        <Container className='iconSkillSection'>
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
        </Container>
    );
}



export {IconSkillSection};



// {iconSkillsArray.map((skill) => (
//     <div key={skill.idskills} className={`${skill.name}-frame`}>
//         <picture>
//             <img src={skill.image} alt={`${skill.name}-image`}></img>
//         </picture>
//     </div>
// ))}

// {iconSkillsArray.map((skill) => (
//     <li key={skill.idskills}>
//         {skill.name}  - {skill.text}
//     </li>
// ))}