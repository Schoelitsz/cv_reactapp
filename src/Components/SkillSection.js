import React, {useState} from 'react';
import { Container, ProgressBar, Row, Col } from 'react-bootstrap';
import '../styles/scss/Section.scss';
//import SkillBars from './SkillBars';
//import { IconSkillSection } from './IconSkills';

const sliderSkillsArray = [
    { skillname: 'Python', score: 70, display: '7', text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,' },
    { skillname: 'CSharp', score: 50, display: '5', text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,' },
    { skillname: 'Javascript', score: 60, display: '6', text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,'},
    { skillname: 'HTMLCSS', score: 65, display: '6.5', text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,' },
    { skillname: 'SQL', score: 55, display: '5.5', text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,'},
    { skillname: 'PHP', score: 45, display: '4.5', text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,'}
];

const iconSkillsArray = ['bootstrap', 'scrum', 'mysql', 'github', 'visualstudiocode'];

function SkillSection() {

    const [hoveredSkillText, setHoveredSkillText] = useState('');

    const handleSkillHover = (text) => {
        setHoveredSkillText(text);
    };

    const handleSkillLeave = () => {
        setHoveredSkillText('');
    };

    return (
        <Container className='SkillSection' id="Skills">
            <h1>Skills</h1>
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
                        <div className='progress-div' 
                            key={index} 
                            onMouseEnter={() => handleSkillHover(skill.text)}
                            onMouseLeave={handleSkillLeave}
                            >

                            <h3>{skill.skillname}</h3>
                            <ProgressBar className='bg-progress' now={skill.score} variant={skill.skillname} />
                        </div>
                    ))}
                </Col>
            </Row>

            <div className='iconSkillSection'>
                <Row>
                    <h1>Also experienced with:</h1>
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
        </Container>
    );
}


export default SkillSection;
