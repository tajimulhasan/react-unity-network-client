import React from "react";
import "./RegiChild.css";
const RegiChild = ({ regiElement }) => {
  const { name, email } = regiElement;

  return (
    <div>
      <table>
        <thead>
          <tr>
          <th>name</th>
      <th>email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegiChild;
