import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/scss/Section.scss'

function Timeline() {
  return (
    <Container className="py-5">
      <ul className="timeline">
        <li className="timeline-item mb-5">
          <h5 className="fw-bold">Our company starts its operations</h5>
          <p className="text-muted mb-2 fw-bold">11 March 2020</p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            necessitatibus adipisci, ad alias, voluptate pariatur officia
            repellendus repellat inventore fugit perferendis totam dolor
            voluptas et corrupti distinctio maxime corporis optio?
          </p>
        </li>

        <li className="timeline-item mb-5">
          <h5 className="fw-bold">First customer</h5>
          <p className="text-muted mb-2 fw-bold">19 March 2020</p>
          <p className="text-muted">
            Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
            aliquet laoreet sapien, eget pulvinar lectus maximus vel.
            Phasellus suscipit porta mattis.
          </p>
        </li>

        <li className="timeline-item mb-5">
          <h5 className="fw-bold">Our team exceeds 10 people</h5>
          <p className="text-muted mb-2 fw-bold">24 June 2020</p>
          <p className="text-muted">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nulla ullamcorper arcu lacus, maximus
            facilisis erat pellentesque nec. Duis et dui maximus dui aliquam
            convallis. Quisque consectetur purus erat, et ullamcorper sapien
            tincidunt vitae.
          </p>
        </li>

        <li className="timeline-item mb-5">
          <h5 className="fw-bold">Earned the first million $!</h5>
          <p className="text-muted mb-2 fw-bold">15 October 2020</p>
          <p className="text-muted">
            Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
            et urna sit amet massa dapibus tristique non finibus ligula. Nam
            pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
            vulputate mattis.
          </p>
        </li>
      </ul>
    </Container>
  );
}

export default Timeline;