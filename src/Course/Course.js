import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col,} from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Course.css'
const Course = (props) => {
    const {courseName,catagory,institute,rating,totalStudent,imgUrl} = props.course;
    console.log(props)
    return (
       
            <Col>
            <Card className="h-100 bg-farhan">
                <Card.Img height="250" variant="top" src={imgUrl} className="p-y"/>
                <Card.Body>
                <Card.Title>{courseName}</Card.Title>
                    <p>{institute}<small><br /> {catagory}</small> <br />   {totalStudent} Students </p>
                    <h6>${}</h6>
                        <p> Rating :  
                    <Rating className="rating"
                        placeholderRating={rating}
                        emptySymbol={<i className="far fa-star" bg="warning" ></i>}
                        placeholderSymbol={<i className="fas fa-star" bg="warning" ></i>}
                        fullSymbol={<i className="fas fa-star" bg="warning" ></i>}/>
                    </p>
                    </Card.Body>
                     <Card.Footer>
                    <Link to="/"> 
                    <Button className="btn-hero">Enroll Now</Button>
                    </Link>
                </Card.Footer>
                </Card>
         </Col>
        
      
    );
};

export default Course;