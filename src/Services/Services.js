import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import { useCourses } from '../hooks/useCourses';
import './Services.css'
const Services = () => {
    const [courses] = useCourses();

    return (
        <Container className="py-4">
            
            <Row xs={1} md={3} className="g-4 services-style">
            {
                courses.map(course => <Course
                    key={course.id}
                    course ={course}
                ></Course>)
            }
            </Row>
        </Container>
    );
};

export default Services;