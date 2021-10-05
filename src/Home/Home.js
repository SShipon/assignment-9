import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import { useCourses } from '../hooks/useCourses.js';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const [courses] = useCourses();

    return (
        <Container>
            <div className="Home-style">
                <h1>Learn online from the leaders in business education</h1>
                <p>Expand your business skills and engage with a global network of learners through our flexible, online courses. Wherever you are in your career—or the world—Harvard Business School Online can help you achieve your goals.</p>

    <Carousel fade>
   <Carousel.Item >
    <img 
      className="d-block w-100 img-size"
      src="https://img.freepik.com/free-photo/medium-shot-girl-with-laptop-home_23-2149014092.jpg?size=626&ext=jpg"
      alt="First slide"
    />
    <Carousel.Caption className="item-color">
      <h3>Online Computer Science Course - Software Engineer Frontend..</h3>
      <p>Learn online and earn valuable credentials from top universities like Yale, Michigan, Stanford, and leading companies like Google and IBM.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-size"
      src="https://image.freepik.com/free-photo/smiling-man-white-shirt-typing-text-message-scrolling-feed-social-network-using-smartphone-gray_171337-634.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className="item-color">
      <h3>York Courses Website - York Graphic Standards</h3>
      <p>Join millions of people learning on FutureLearn. Find online courses and degrees from leading universities or organisations and start learning online today..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-size"
      src="https://image.freepik.com/free-photo/young-handsome-business-man-choosing-car-car-showroom_1303-17901.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className="item-color">
      <h3>courses with certificates</h3>
      <p>Free online courses with certificates. Join 2 million graduates and empower your career. Study, learn, certify, upskill with free online learning and ...</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

                <h2 className="course">Our online Running Course</h2>
                <Row
                    xs={1} md={3} className="g-4 ">
                    {
                    courses.slice(0, 4).map(course => <Course
                          course={course}
                        ></Course>)
                       
                    }
                </Row>
            </div>

        </Container>
        
    );
};

export default Home;