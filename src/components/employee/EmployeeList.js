import React, { useEffect, useState }  from 'react';
import EmployeeManager from "../../modules/EmployeeManager"
import EmployeeCard from './EmployeeCard';
// import AnimalCard from './AnimalCard';

const EmployeeList = (props) => {

  return (
    <>
      { props.employees.map(employee => <EmployeeCard key={employee.id} {...props} employee={employee}/>) }
    </>
  );
};

export default EmployeeList
