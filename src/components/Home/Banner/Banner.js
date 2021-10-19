import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className=" container mt-5">
                <div >
                    <h1>Optometrist <span style={{ color: 'red' }}>EyeCare</span> Specialist <br /> Hospital</h1>
                    <p>EyeCare has been named the best ophthalmology <br /> hospital in the world for the 17th <br /> straight year by U.S. News  World Report.</p>
                </div>
                <div>
                    <img className="img-fluid" src="https://i.ibb.co/5KB4zLJ/banner2.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;