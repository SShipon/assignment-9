import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
const About = () => {
  return (
    <div style={{ background: "rgb(245, 245, 245)" }} className="py-5">
      <Container>
        <h2 className="text-center mb-4">WELCOME TO CODING CLUB INSTITUTE</h2>
        <Row>
          <Col className="pe-3">
            <h5>About Us</h5>
            <p>
              There are countless online education marketplaces on the internet.
              And there’s us. We are not the biggest. We are not the cheapest.
              But we are the fastest growing. We have the highest course
              completion rate in the industry.course, we commit to the student. We are not going to sugar coat
              it - we will make you complete, come what may. You may not have
            </p>
              <h5>our reason</h5>        
            <p>
              And the reason is, we don’t give up. When a student commits to a
              course, we commit to the student. We are not going to sugar coat
              it - we will make you complete, come what may. You may not 
              are ridiculously committed to our students. Be it constant
              reminders, relentless masters or 24 x 7 online support - we will
              absolutely make sure that you run out of excuses to not complete
              the course.
            </p>
          </Col>
          <Col className="pe-3">
            <h5>Our Vision</h5>
            <p>
              To become the largest online learning ecosystem for continuing
              education, in partnership with corporates and academia.reminders, 
              absolutely make sure that you run out of excuses to not complete
              the course.professional life to the next level.complete, come what may. You may not have
            </p>
            <h5>Our Mission</h5>
            <p>
              To create an alternate platform for students who wish to continue
              and complete courses by attending live online courses, using a
              team of ridiculously committed educators who will stop at nothing
              deploying our world class team of industry experts, we aim to
              educate our learners with the skills they need to advance their
              professional life to the next level.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h5>Sign up for our monthly newsletter</h5>
            <p>Be the first to know about news and updates</p>
          </Col>
          <Col className="d-flex align-items-center">
            <Form className="w-100">
              <Form.Group className="d-flex" controlId="formBasicEmail">
                <Form.Control
                  className="py-2 rounded-0"
                  type="email"
                  placeholder="Enter email"
                />
                <button
                  style={{ width: "120px" }}
                  className="btn rounded-0 btn-primary"
                >
                  SIGN UP
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;