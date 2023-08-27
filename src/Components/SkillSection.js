import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import '../styles/scss/Section.scss';

const sliderSkillsArray = [
    { skillname: 'Python', score: 70, display: '7' },
    { skillname: 'CSharp', score: 50, display: '5' },
    { skillname: 'HTMLCSS', score: 65, display: '6.5' },
];

function SkillBars() {
    return (
        <Container className='SkillSection'>
            
            {sliderSkillsArray.map((skill, index) => (
                <div className='progress-div' key={index}>
                    <h3>{skill.skillname}</h3>
                    <ProgressBar className='bg-progress' now={skill.score} variant={skill.skillname} />
                </div>
            ))}
           
        </Container>
    );
}

export default SkillBars;
