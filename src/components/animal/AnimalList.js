import React, { useEffect, useState }  from 'react';
import AnimalManager from "../../modules/AnimalManager"
import AnimalCard from './AnimalCard';

const AnimalList = (props) => {

  // Create an initial state of an empty array called animals, and a function for updating animals, called setAnimals
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return AnimalManager.getAll().then(animalsFromAPI => {
      console.log(animalsFromAPI);
      setAnimals(animalsFromAPI)
    });
  };

  const deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll().then(setAnimals));
  };

  // When AnimalList mounts to the DOM for the first time, go get the animals
  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {props.history.push("/animals/new")}}>
            Admit Animal
        </button>
      </section>
      <div className="container-cards">
        { animals.map(animal => <AnimalCard key={animal.id} {...props} animal={animal} deleteAnimal={deleteAnimal}/>) }
      </div>
    </>
  );
};

export default AnimalList
