import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="row mt-3 mb-2 mx-auto container">
                <h1>Our <span style={{ color: 'red' }}>Services</span></h1>
                < hr />
                {
                    services.map(data => <Service
                        key={data.id}
                        data={data}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;