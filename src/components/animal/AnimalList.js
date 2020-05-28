import React, { useEffect, useState }  from 'react';
import AnimalManager from "../../modules/AnimalManager"
import AnimalCard from './AnimalCard';

const AnimalList = () => {

  // Create an initial state of an empty array called animals, and a function for updating animals, called setAnimals
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return AnimalManager.getAll().then(animalsFromAPI => {
      console.log(animalsFromAPI);
      setAnimals(animalsFromAPI)
    });
  };

  // When AnimalList mounts to the DOM for the first time, go get the animals
  useEffect(() => {
    getAnimals();
  }, []);

  return (
      <>
        <h1>Hello, React!</h1>
        <div className="container-cards">
          { animals.map(animal => <AnimalCard key={animal.id} animal={animal} />) }
        </div>
      </>
  );
};

export default AnimalList
