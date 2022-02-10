import React, { useState } from "react";
import useHttp from "../Components/Hooks/useHttp";
import PetForm from "../Components/PetForm/PetForm";

const AddPet = () => {
  const { error, sendRequest: fetchAddPet } = useHttp();

  const onPostSuccess = (newPet) => {
    console.log(newPet);
    document.location.replace("/pets");

  }

  async function sendPost(newPet) {
    fetchAddPet({
      url: "http://localhost:8080/add-pet",
      method: "POST",
      body: newPet,
      headers: {
        "Content-Type": "application/json",
      },
    }, onPostSuccess)
  }

  return <PetForm sendPet={sendPost} error={error} />;
};

export default AddPet;
