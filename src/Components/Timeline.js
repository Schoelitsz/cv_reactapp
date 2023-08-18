import React from 'react';

function TimelineStep({ year, title }) {
  return (
    <div className="timeline-step">
      <div
        className="timeline-content"
        data-toggle="popover"
        data-trigger="hover"
        data-placement="top"
        title=""
        data-content="And here's some amazing content. It's very engaging. Right?"
        data-original-title={year}
      >
        <div className="inner-circle"></div>
        <p className="h6 mt-3 mb-1">{year}</p>
        <p className="h6 text-muted mb-0 mb-lg-0">{title}</p>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="container">
      <div className="row text-center justify-content-center mb-5">
        <div className="col-xl-6 col-lg-8">
          <h2 className="font-weight-bold">A Company Evolution</h2>
          <p className="text-muted">
            We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
            <TimelineStep year="2003" title="Favland Founded" />
            <TimelineStep year="2004" title="Launched Trello" />
            <TimelineStep year="2005" title="Launched Messenger" />
            <TimelineStep year="2010" title="Open New Branch" />
            <TimelineStep year="2020" title="In Fortune 500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
