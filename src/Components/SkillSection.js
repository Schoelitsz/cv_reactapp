import React from 'react';
//import '../styles/section.scss';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
// import { getIconSkills } from '.';
import { getIconSkills } from '../../../server/Controllers/SkillsController';


function IconSkillSection({ iconSkillsArray }) {
    return (
        <Container>
            <Row>
                <Col>
                   <ul>
                        {iconSkillsArray.map((skill) => (
                            <li key={skill.idskills}>
                                {skill.name}  - {skill.text}
                            </li>
                        ))}
                   </ul>
                 </Col>
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
