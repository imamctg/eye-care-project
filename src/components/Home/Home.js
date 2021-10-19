import React from 'react';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

import Banner from './Banner/Banner';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;