import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function SkillBars() {
  return (
    <div>
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
    </div>
  );
}

export default SkillBars;
