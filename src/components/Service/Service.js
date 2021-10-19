import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    console.log(props.data)
    const { name, description, img, id } = props.data;
    return (
        <div className="col-md-4">
            <div className="container service">
                <Card className="mb-2 card shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '180px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Description: {description}</Card.Text>
                        <Link to={`/servicesdetail/${id}`}>
                            <Button variant="info">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>


            </div>
        </div>
    );
};

export default Service;