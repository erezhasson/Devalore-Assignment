import React, { useContext, useEffect, useState } from "react";
import useHttp from "../Components/Hooks/useHttp";
import Pets from "../Components/Pets/Pets";

const AllPets = () => {
  const { error, sendRequest: fetchPets } = useHttp();
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetchPets({
      url: "http://localhost:8080/pets",
      method: "GET",
      headers: {},
    }, setAllPets)

      if (error) {
        console.log(error);
      }
  }, []);

  return (
    <>
      <Pets pets={allPets} />
    </>
  );
};

export default AllPets;
