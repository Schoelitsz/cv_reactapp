import React from 'react';
import { useState, useEffect } from "react";
import NameSection from './NameSection';
import Timeline from './Timeline';
import SkillSection from './SkillSection';
import ProjectCards from './ProjectSection';
import ContactSection from './ContactSection';
import CareerSection from './CareerSection';
//import { IconSkillSection } from './IconSkills';

function Display() {
    return (
        <div>
            <NameSection />
            <Timeline />
            <SkillSection />
            <ProjectCards />
            <ContactSection />
            <CareerSection />
            
        </div> 
    );
}

export default Display;