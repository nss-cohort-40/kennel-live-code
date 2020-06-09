import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";

const AnimalSpotlight = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });

  useEffect(() => {
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed
      });
    });
  }, [props.animalId]); //needs props.animalId as a dependency or won't re-render on props change of animalId from Home component.

  return (
    <div className="animal-spotlight">
      <img src={require('./dog.svg')} alt="My Dog" />
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
        {/* This is just for logging purposes */}
        <p>{props.animalId}</p>
      </div>
    </div>
  );
};

export default AnimalSpotlight;
