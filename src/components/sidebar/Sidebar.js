import React from "react";
import "./Sidebar.css"

const Sidebar = (props) => {

  return (
    <section className="sidebar">
      <h2>Contact Us!</h2>
      <ul>
        {props.employees.map( emp => <li key={emp.id}>{emp.title}: {emp.email}</li>)}
      </ul>
    </section>
  );
};

export default Sidebar;
