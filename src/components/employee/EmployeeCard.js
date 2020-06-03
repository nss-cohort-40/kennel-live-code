import React from "react";
import { Link } from "react-router-dom";
// import "./EmployeeCard.css"

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./person-icon.png")} alt="Employee" />
        </picture>
        <h3>
          Name: <span className="card-employeename">{props.employee.name}</span>
        </h3>
        <Link to={`/employees/${props.employee.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
