import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams();

    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const ExactIteam = data.filter(td => td.id == id);

    console.log(ExactIteam)

    return (

        <div>

            <div className="container">
                <Card className="mb-2 card shadow-lg" style={{ width: '400px' }}>
                    <Card.Img style={{ height: '180px' }} variant="top" src={ExactIteam[0]?.img} />
                    <Card.Body>
                        <Card.Title>Name : {ExactIteam[0]?.name}</Card.Title>
                        <Card.Text>Description: Description : {ExactIteam[0]?.description}</Card.Text>

                    </Card.Body>
                </Card>


            </div>


        </div>

    );
};

export default ServiceDetails;