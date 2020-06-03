import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";
import EmployeeList from "./employee/EmployeeList";
import Login from "./auth/Login";
//only include these once they are built - previous practice exercise
// import LocationCard from "./location/LocationCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

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
        if (isAuthenticated()) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={props => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>;
        }}
      />
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />
      <Route path="/login" component={Login} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/employees/:employeeId(\d+)" render={(props) => {
        return <EmployeeWithAnimals {...props} />
      }} />
      <Route exact path="/employees" render={props => {
        if (isAuthenticated()) {
          return <EmployeeList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;
