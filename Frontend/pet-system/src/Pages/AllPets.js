import React, { useContext, useEffect, useState } from "react";
import Pets from "../Components/Pets/Pets";

const AllPets = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/pets", {
      method: "GET",
      headers: {},
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (fetechedPets) {
        setAllPets(fetechedPets);
        // ctx.pets = fetechedPets;
        // console.log(ctx.pets)
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  return (
    <>
      <Pets pets={allPets} />
    </>
  );
};

export default AllPets;
