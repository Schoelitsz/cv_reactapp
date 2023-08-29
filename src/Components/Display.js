import React from 'react';
import { useState, useEffect } from "react";
import NameSection from './NameSection';
import Timeline from './Timeline';
import SkillSection from './SkillSection';
import ProjectCards from './ProjectSection';
import { IconSkillSection } from './IconSkills';

function Display() {
    return (
        <div>
            <NameSection />
            <Timeline />
            <SkillSection />
            <ProjectCards />
            
        </div> 
    );
}

export default Display;