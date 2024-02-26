import React, { useEffect, useState } from 'react';
import AllEvent from '../AllEvent/AllEvent';
import './AllEvents.css';
const AllEvents = () => {
    const [allEvents, setAllEvents] = useState([]);
    useEffect(() => {
          fetch('Data.json')
          .then(res => res.json())
          .then(data => setAllEvents(data))
    }, []);
    console.log(allEvents);
    return (
    
         <div className="allEvents">
                  {
                    allEvents.map(allEvent => <AllEvent allEvent={allEvent}></AllEvent>)
                  }
            </div>  
    );
};

export default AllEvents;