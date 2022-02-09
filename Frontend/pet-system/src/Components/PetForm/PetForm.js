import React, { useEffect, useRef, useState } from "react";
import "./PetForm.css";
import FormInput from "./FormInput";
import FormFields from "./FormFields";
import { usePetContext } from "../Context/PetContext";
import useForm from "../Hooks/useForm";

const PetForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
 
  //Final submit function

  //Custom hook call

  const formSubmitted = () => {
    setIsLoading(true);

    props.sendPet(values);

    setIsLoading(false);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(formSubmitted);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="contact">
        <h3>Add New Pet</h3>
        <div className="error-message">{props.error}</div>
        {FormFields.map((field) => {
          return (
            <FormInput
            key={field.id}
            name={field.name}
            type={field.type}
            inputType={field.inputType}
            options={field.options}
            error={errors[field.name]}
            placeholder={field.placeholder}
            onChange={handleChange}
          />
          );
 
        })}
        {!isLoading && (
          <fieldset>
            <button name="submit" type="submit" id="contact-submit">
              Submit
            </button>
          </fieldset>
        )}
      </form>
      {isLoading && <div className="loading"></div>}
    </div>
  );
};

export default PetForm;
