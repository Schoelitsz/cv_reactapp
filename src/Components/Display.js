import React from 'react';
import { useState, useEffect } from "react";
import NameSection from './NameSection';
import Timeline from './Timeline';
import SkillBars from './SkillSection';
import ProjectCards from './ProjectSection';
//import { IconSkillSection } from './SkillSection';

function Display() {
    return (
        <div>
            <NameSection />
            <Timeline />
            <SkillBars />
            <ProjectCards />
            
            
            
        </div> 
    )
}

export default Display;