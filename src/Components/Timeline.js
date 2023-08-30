import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/scss/Section.scss'

function Timeline() {
  return (
    <Container className="py-5" id='Resume'>
      <h1>Resume</h1>
      <ul className="timeline">
        <li className="timeline-item mb-5">
          <h3>Software Engineer</h3>
          <h5 className="fw-bold">Etesian IT Consultency</h5>
          <p className="text-muted mb-2 fw-bold">01/2023 - 06/2023</p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            necessitatibus adipisci, ad alias, voluptate pariatur officia
            repellendus repellat inventore fugit perferendis totam dolor
            voluptas et corrupti distinctio maxime corporis optio?
          </p>
        </li>

        <li className="timeline-item mb-5">
          <h3>SmartBar Technical Support</h3>
          <h5 className="fw-bold">Media Markt Heerlen</h5>
          <p className="text-muted mb-2 fw-bold">10/2021 - 11/2022</p>
          <p className="text-muted">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nulla ullamcorper arcu lacus, maximus
            facilisis erat pellentesque nec. Duis et dui maximus dui aliquam
            convallis. Quisque consectetur purus erat, et ullamcorper sapien
            tincidunt vitae.
          </p>
        </li>

        <li className="timeline-item mb-5">
          <h3>HBO Associate Degree IT -- Graduated</h3>
          <h5 className="fw-bold">Zuyd Hogeschool Heerlen, The Netherlands</h5>
          <p className="text-muted mb-2 fw-bold">09/2018 - 07/2021</p>
          <p className="text-muted">
            Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
            aliquet laoreet sapien, eget pulvinar lectus maximus vel.
            Phasellus suscipit porta mattis.
          </p>
        </li>

        {/* <li className="timeline-item mb-5">
          <h5 className="fw-bold">Earned the first million $!</h5>
          <p className="text-muted mb-2 fw-bold">15 October 2020</p>
          <p className="text-muted">
            Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
            et urna sit amet massa dapibus tristique non finibus ligula. Nam
            pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
            vulputate mattis.
          </p>
        </li> */}
      </ul>
    </Container>
  );
}

export default Timeline;