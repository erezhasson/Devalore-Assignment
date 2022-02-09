import React, { useEffect } from "react";
import Pet from "../Pet/Pet";
import "./Pets.css";

const Pets = (props) => {

  let petAgeSum = props.pets.reduce(function (currAgesValue, pet) {
    return currAgesValue + parseFloat(pet.Age);
  }, 0);

  return (
    <div className="pets-wrapper">
      <div className="pets-title">Pets ({props.pets.length} Results)</div>
      {props.pets.map((pet) => {
        return (
          <Pet
            key={pet.id}
            petImg={pet.Image}
            petName={pet.Name}
            petAge={pet.Age}
            petType={pet.Type}
            petColor={pet.Color}
          />
        );
      })}
      <div className="pets-age">Total Pets Age: {petAgeSum}</div>
    </div>
  );
};

export default Pets;
