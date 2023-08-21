import React, { useState } from 'react';
import '../styles/scss/constructionbanner.scss'; 

function ConstructionBanner() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`construction-banner ${expanded ? 'expanded' : ''}`}>
      <div className="message" onClick={toggleExpanded}>
        <img className='animation' src='./animations/underconstruction.gif'></img>
      </div>
      <div className="additional-info">
        This is a work in progress, as most good things are!
      </div>
    </div>
  );
}

export default ConstructionBanner;
