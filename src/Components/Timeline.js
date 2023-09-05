import React from 'react';
import { Container} from 'react-bootstrap';
import '../styles/scss/Section.scss'

function Timeline() {
  return (
    <Container className="timeline-section" id='Resume'>
      <h1>Resume</h1>
      <ul className="timeline">
        <li className="timeline-item mb-5">
          <h3>Software Engineer</h3>
          <h5 className="fw-bold">Etesian IT Consultency</h5>
          <p className="text-muted mb-2 fw-bold">01/2023 - 06/2023</p>
          <p className="text-muted">
            As part of a Scrum Team I was responsible for delivering on Client's wishes for their business website.
            We did daily stand ups and I got assigned stories and bug issues during biweekly sprints with the product owner. Additionally, we frequently visited the Client
            to maintain our relationship and understand the feel and needs of the business. 
            I mainly worked on the front-end with HTML/CSS and Javascript/Jquery in slim application framework in a project that had DI implemented. My scrum master encouraged me to
            work on the back-end that was written in PHP.

            Overall, it was a challenging project to be a part of as my first job in this field, and I learned that I like a challenge.
          </p>
        </li>

        <li className="timeline-item mb-5">
          <h3>SmartBar Technical Support</h3>
          <h5 className="fw-bold">Media Markt Heerlen</h5>
          <p className="text-muted mb-2 fw-bold">10/2021 - 11/2022</p>
          <p className="text-muted">
            Working at the SmartBar was all about thriving in the midst of chaos. It was the very definition of octopus work
            and while it was technically retail, I consider my time there valuable for my skillset as an IT'er. 
            Helping customers with all their questions about computers, phones and software, offering technical and retail solutions, keeping up with the administration for the repairations, diagnosing software and hardware matters, all while keeping a complex workspace clean and organized.
            While my Education was all about developing custom software working at the SmartBar exposed me to working with hardware and deep diving into the OS of our users.

            There, I got to open up smart phones, laptops and desktops, and while I personally had a lot of experience with Android, my time at Media Markt
            gave me the necessary experience with Apple OS and IOS, not to mention a little more handson experience with computer components.

            Not to mention the endless stream of close, personal contact with all types of customers, deeply enhanced my communication and personal skills that was
            previously only over the phone.

            Overall, while not traditional in the IT field, a very valuable time for my career and personal development.
          </p>
        </li>

        <li className="timeline-item mb-5">
          <h3>HBO Associate Degree IT -- Graduated</h3>
          <h5 className="fw-bold">Zuyd Hogeschool Heerlen, The Netherlands</h5>
          <p className="text-muted mb-2 fw-bold">09/2018 - 07/2021</p>
          <p className="text-muted">
            Associate Degree is all about getting you ready to function as a developer as quick as possible. You start programming as soon as possible, starting with Python
            and then learning programming concepts like OOP through C#. We focused on the whole process of engineering code from start to finish:
            communicating with a customer, requirement engineering, creating models to visualize the software, UML, creating a prototype, both waterfall and agile, including Scrum, 
            testing and implementing, all the while frequently going back to the table to make sure the customer is still happy.
            The Degree includes a few tasty drops of other parts of the IT field, like business intelligence, Cyber Security and seperate modules specifically about web-development and 
            mobile application development. 

            It was hard not to fall in love with every single aspect of this experience, and I never say if it's about going back for more.
          </p>
        </li>
        {/* <li className="timeline-item mb-5">
          <h3>HBO Associate Degree IT -- Graduated</h3>
          <h5 className="fw-bold">Zuyd Hogeschool Heerlen, The Netherlands</h5>
          <p className="text-muted mb-2 fw-bold">09/2018 - 07/2021</p>
          <p className="text-muted">
            Associate Degree is all about getting you ready to function as a developer as quick as possible. You start programming as soon as possible, starting with Python
            and then learning programming concepts like OOP through C#. We focused on the whole process of engineering code from start to finish:
            communicating with a customer, requirement engineering, creating models to visualize the software, UML, creating a prototype, both waterfall and agile, including Scrum, 
            testing and implementing, all the while frequently going back to the table to make sure the customer is still happy.
            The Degree includes a few tasty drops of other parts of the IT field, like business intelligence, Cyber Security and seperate modules specifically about web-development and 
            mobile application development. 

            It was hard not to fall in love with every single aspect of this experience, and I never say if it's about going back for more.
          </p>
        </li> */}
      </ul>
    </Container>
  );
}

export default Timeline;