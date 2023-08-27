import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/scss/Section.scss'

const TimelineItem = ({ date, title, content }) => (
  <div className="timeline-item">
    <div className="timeline-date">{date}</div>
    <div className="timeline-content">
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  </div>
);

const Timeline = () => {
  const timelineItems = [
    {
      date: '2 June',
      title: 'Event One',
      content:
        'It will be as simple as occidental in fact it will be Occidental Cambridge friend',
    },
    {
      date: '5 June',
      title: 'Event Two',
      content:
        'Everyone realizes why a new common language one could refuse translators.',
    },
    {
      date: '7 June',
      title: 'Event Three',
      content:
        'If several languages coalesce the grammar of the resulting simple and regular',
    },
    {
      date: '8 June',
      title: 'Event Four',
      content:
        'Languages only differ in their pronunciation and their most common words.',
    },
  ];

  return (
    <Container className="py-5">
      <Row>
        <Col lg="12">
          <div className="horizontal-timeline">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;
