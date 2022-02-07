import React, { useState, useRef } from "react";
import "./PetForm.css";
import Select from "react-select";

const PetForm = () => {
  const [errorMessage, setErrorMessage] = useState();
  const nameRef = useRef();
  const ageRef = useRef();
  const typeRef = useRef();
  const colorRef = useRef();

  const options = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Horse", label: "Horse" },
    { value: "Other", label: "Other" },
  ];

  const sendPost = (newPet) => {
    fetch("http://localhost:8080/add-pet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPet),
    })
      .then((response) => {
        document.location("/pets");
      })
      .catch((errors) => {
        setErrorMessage(errors[0].message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPet = {
      Name: nameRef.current.value,
      Age: ageRef.current.value,
      Type: typeRef.current.value,
      Color: colorRef.current.value,
    };

    sendPost(newPet);
  };

  return (
    <div class="container">
      <form id="contact" action="" method="post">
        <h3>Add New Pet</h3>
        <div className="error-message">{errorMessage}</div>
        <fieldset>
          <input
            placeholder="Image"
            type="url"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            ref={nameRef}
            placeholder="Name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            ref={ageRef}
            placeholder="Age"
            type="number"
            min={0.5}
            step={0.5}
            tabindex="2"
            required
          />
        </fieldset>
        <fieldset>
          <Select options={options} tabindex="3" ref={typeRef} required />
        </fieldset>
        <fieldset>
          <input type="radio" value="Black" name="color" ref={colorRef} /> Black
          <input type="radio" value="White" name="color" ref={colorRef} /> White
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default PetForm;
