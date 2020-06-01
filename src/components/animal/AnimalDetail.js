import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager';
import './AnimalDetail.css'

const AnimalDetail = props => {

  const [animal, setAnimal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed
        });
        return EmployeeManager.get(animal.employeeId)
      })
      .then(employee => {
        setAnimal({caretaker: employee.name})
        setIsLoading(false);
      });
  }, [props.animalId]);

  const handleDelete = () => {
    console.log("WTF?")
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
        <p>Caretaker: {animal.caretaker || "not assigned"} </p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;
