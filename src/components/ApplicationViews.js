import { Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";
import EmployeeList from "./employee/EmployeeList";
import Login from "./auth/Login";
import EmployeeManager from "../modules/EmployeeManager"
import AboutUs from "./about/AboutUs";
//only include these once they are built - previous practice exercise
// import LocationCard from "./location/LocationCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return EmployeeManager.getAll().then(employeesFromAPI => {
      console.log(employeesFromAPI);
      setEmployees(employeesFromAPI)
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/animals" render={props => {
        if (hasUser) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={props => {
          console.log("animal id", props.match.params.animalId)
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>;
        }}
      />
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (hasUser) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/employees/:employeeId(\d+)" render={(props) => {
        return <EmployeeWithAnimals {...props} />
      }} />
      <Route exact path="/employees" render={props => {
        if (hasUser) {
          return <EmployeeList {...props} employees={employees} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
       <Route path="/about" render={props => {
        return <AboutUs {...props} employees={employees}/>
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;
