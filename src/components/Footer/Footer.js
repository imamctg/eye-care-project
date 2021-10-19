import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterLink from './FooterLink';
// import FooterQuickLinks from '../FooterQuickLinks/FooterQuickLinks';

const Footer = () => {
    return (
        <footer className="bg-dark py-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-4 d-flex">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '40px' }} />
                        <p className="ms-2 fw-bolder">F#10(3st floor), Road #16, <br />Kualalampur, Malaysia</p>
                    </div>
                    <div className="col-md-4 ">
                        <h4>Quick Links</h4>
                        <div>
                            <FooterLink></FooterLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p>Eyecare hospital provides comprehensive eye care services to the patient, offers modern diagnostic facilities and performs world standard eye surgeries and laser procedures.!</p>
                        <div className='d-flex justify-content-evenly' style={{ fontSize: '2em' }}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;