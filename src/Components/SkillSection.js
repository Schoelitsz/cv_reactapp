import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';

function SkillBars() {
  return (
        <Container>
            <ul>
                <li>
                    <ProgressBar now={0} />
                </li>
                <li>
                    <ProgressBar now={25} />
                </li>
                <li>
                    <ProgressBar now={50} />  
                </li>
                <li>
                    <ProgressBar now={75} />
                </li>
                <li>
                    <ProgressBar now={100} />  
                </li>
            </ul>
        </Container>
  );
}

export default SkillBars;
