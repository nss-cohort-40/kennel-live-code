import React from "react";
import Sidebar from "../sidebar/Sidebar";
import EmployeeList from "../employee/EmployeeList";
import "./About.css"

const AboutUs = (props) => {

  return (
    <>
      <section className="about-us">
        <div className="about-us__column">
          <EmployeeList employees={props.employees}/>
        </div>
        <div className="about-us__column">
          <Sidebar employees={props.employees}/>
        </div>
      </section>
    </>
  )

};

export default AboutUs;
