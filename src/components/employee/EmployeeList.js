import React, { useEffect, useState }  from 'react';
import EmployeeManager from "../../modules/EmployeeManager"
// import AnimalCard from './AnimalCard';

const EmployeeList = () => {

  // Create an initial state of an empty array called animals, and a function for updating animals, called setAnimals
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return EmployeeManager.getAll().then(employeesFromAPI => {
      console.log(employeesFromAPI);
      setEmployees(employeesFromAPI)
    });
  };

  // const deleteEmployee = id => {
  //   EmployeeManager.delete(id)
  //     .then(() => EmployeeManager.getAll().then(setEmployees));
  // };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <ul>
        { employees.map(employee => <li>employee.name</li>) }
      </ul>
    </>
  );
};

export default EmployeeList
