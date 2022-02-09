import React, { useState } from "react";
import PetForm from "../Components/PetForm/PetForm";

const AddPet = () => {
  const [postError, setPostError] = useState("");
  const [postData, setPostData] = useState({
    status: "",
    data: "",
  });

  async function sendPost(newPet) {
    fetch("http://localhost:8080/add-pet", {
      method: "POST",
      body: JSON.stringify(newPet),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        setPostData({
          status: dataJSON.status,
          data: dataJSON,
        });

        console.log(dataJSON);
        document.location.replace("/pets");
      })
      .catch((error) => {
        console.log(error)
        setPostError(error.message);
      });
  }

  return <PetForm sendPet={sendPost} res={postData} error={postError} />;
};

export default AddPet;
