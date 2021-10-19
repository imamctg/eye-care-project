import React from 'react';
import { Card } from 'react-bootstrap';
import image1 from '../../images/patient1.png'
import image2 from '../../images/patient2.png'
import image3 from '../../images/patient3.png'
import image4 from '../../images/patient4.png'
import './Testimonial.css';


const Testimonial = () => {
    return (
        <div className="container mx-auto mb-5">
            <h1>Patient <span style={{ color: 'red' }}>Say</span> About us</h1>
            <hr />
            <div className="row container ">

                <div className="col-lg-6 mb-5">
                    <Card className="card-border" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image1} />

                        <Card.Title>Mr. Prakash Raddi</Card.Title>
                        <Card.Text>
                            Hi I am a computer engeneer. I had severe burning in my eyes and I came to Eyecare Hospital. Really Outstanding services that I got.
                        </Card.Text>


                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="card-border" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image2} />

                        <Card.Title>Mr. R Krisnan</Card.Title>
                        <Card.Text>
                            It was pleasure visiting Eyecare hospital.I was impressed with the functioning of the hospital.I am sure it would more attact to patient.
                        </Card.Text>


                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="card-border" style={{ width: '18rem' }}>
                        <Card.Img className="card-image" variant="top" src={image3} />

                        <Card.Title>Mr Ratul</Card.Title>
                        <Card.Text>
                            This is the only hospital I ever seen in my life.The perfect place for quick and best treatment of your eyes
                        </Card.Text>


                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="card-border" style={{ width: '18rem' }}>
                        <img className="card-image" src={image4} alt="" />

                        <Card.Title>Miss Helena</Card.Title>
                        <Card.Text>I am happy with this Hospital.I get my freedom from contraclense. Thank you Eyecare Hospital</Card.Text>


                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;