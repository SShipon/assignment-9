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
                <h1>Distance learning and Online courses</h1>
                <img src="https://image.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg" alt="" />

                <h2>Our Running Sevices</h2>
                <Row
                    xs={1} md={3} className="g-4 ">
                    {
                        courses.slice(0, 3).map(course => <Course
                          course={course}
                        ></Course>)
                       
                    }
                </Row>


       
               
            </div>

        </Container>
        
    );
};

export default Home;