import React, { useEffect, useState } from "react";
import "./RegiList.css";
const RegiList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/admin/regilist";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
 const handleDeleteRegi = id =>{
    const url = `http://localhost:5000/admin/regilist/${id}`;
    fetch(url, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
     const remaining = items.filter(d => d._id  !== id);
     setItems(remaining)
    })
 } 
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
              <svg onClick={() => handleDeleteRegi(item._id)} style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#b70606" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegiList;
