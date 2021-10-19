import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, img, speciality } = props.doctor;
    return (
        <div className="col-md-4">
            <div className="container">
                <Card className="mb-5 card shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Speciality : {speciality}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Doctor;