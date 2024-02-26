import React from 'react';
import './AllEvent.css';
const AllEvent = ({allEvent}) => {
    const {name, picture} = allEvent;
    return (
        <div className='element-div'>
            <div>
            <img src={picture} alt="" />
            <p>{name}</p>
            </div>
        </div>
    );
};

export default AllEvent;