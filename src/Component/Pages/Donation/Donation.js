import React from 'react';
import images from '../../../images/donation.png';
import './Donation.css';
const Donation = () => {
    return (
        <div className='text-center donation'>
             <img src={images} alt="" />
        </div>
    );
};

export default Donation;