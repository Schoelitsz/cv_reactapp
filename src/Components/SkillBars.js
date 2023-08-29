import React from 'react';
import { Container, ProgressBar, Row, Col } from 'react-bootstrap';
import '../styles/scss/Section.scss';

const sliderSkillsArray = [
    { skillname: 'Python', score: 70, display: '7' },
    { skillname: 'CSharp', score: 50, display: '5' },
    { skillname: 'Javascript', score: 60, display: '6'},
    { skillname: 'HTMLCSS', score: 65, display: '6.5' },
    { skillname: 'SQL', score: 55, display: '5.5'},
    { skillname: 'PHP', score: 45, display: '4.5'}
];

function SkillBars() {
    return (
        <div>
            <Row>
                <Col>
                <h3 className='rating'>
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                {sliderSkillsArray.map((skill, index) => (
                <div className='progress-div' key={index}>
                    <h3>{skill.skillname}</h3>
                    <ProgressBar className='bg-progress' now={skill.score} variant={skill.skillname} />
                </div>
            ))}
                </Col>
            </Row>
           
        </div>
    );
}

export default SkillBars;
