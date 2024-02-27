import React, { useEffect, useState } from 'react';
import RegiChild from '../RegiChild/RegiChild.js';
const RegiList = () => {
    const [items, setItems] = useState([]);
   useEffect(() =>{
    const url = 'http://localhost:5000/admin/regilist';
    fetch(url)
    .then(res => res.json())
    .then(data => setItems(data))
   }, [])
    return (
        <div>
          
             {
                items.map(item => <RegiChild key={item._id} regiElement={item}></RegiChild>)
             }
        </div>
    );
};

export default RegiList;