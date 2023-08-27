import React from 'react';
import { useState, useEffect } from "react";
import NameSection from './NameSection';
import Timeline from './Timeline';
import SkillBars from './SkillSection';
import ProjectCards from './ProjectSection';
import { IconSkillSection } from './IconSkills';

function Display() {
    return (
        <div>
            <NameSection />
            <Timeline />
            <IconSkillSection />
            <SkillBars />
            <ProjectCards />
            
        </div> 
    );
}

export default Display;