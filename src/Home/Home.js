import React from 'react';
import { Container, Row } from 'react-bootstrap';
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
                <img src="https://img.freepik.com/free-photo/medium-shot-girl-with-laptop-home_23-2149014092.jpg?size=626&ext=jpg" alt="" />

                <h2>Our Running Sevices</h2>
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