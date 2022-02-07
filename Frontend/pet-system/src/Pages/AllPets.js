import React, { useEffect, useState } from "react";
import Pets from "../Components/Pets/Pets";

const AllPets = () => {
  // const publicUrl = process.env.PUBLIC_URL;

  // const allPets = [
  //   {
  //     name: "Bagle",
  //     Age: "2",
  //     Type: "Dog",
  //     Color: "Black",
  //     image: publicUrl + "images/beagle.jpg",
  //   },

  //   {
  //     name: "Meow",
  //     Age: "3.5",
  //     Type: "Cat",
  //     Color: "Black",
  //     image: publicUrl + "images/black_cat.jpg",
  //   },

  //   {
  //     name: "Mitzi",
  //     Age: "2.5",
  //     Type: "Cat",
  //     Color: "White",
  //     image: publicUrl + "images/white_cat.jpg",
  //   },
  // ];

  const [allPets, setAllPets] = useState();

  useEffect(() => {
    console.log("debug");

    fetch("https://localhost:8080/pets", { method: "GET"})
      .then(response => {
        console.log(response.json());
        setAllPets(response.json());
        return;
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
