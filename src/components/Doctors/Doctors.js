import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="row mt-3 mb-2 mx-auto container">
            <h1>Our <span style={{ color: 'red' }}>Doctors</span></h1>
            <hr />
            {
                doctors.map(doctor => <Doctor
                    key={doctor.name}
                    doctor={doctor}
                ></Doctor>)
            }
        </div>
    );
};

export default Doctors;