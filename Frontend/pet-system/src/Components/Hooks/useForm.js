import React, { useState } from "react";
import { omit } from "lodash";
import { usePetContext } from "../Context/PetContext";

const useForm = (callback) => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  const petCtx = usePetContext();

  const validateURL = (url) => {
    if (
      url &&
      url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) === null
    ) {
      setErrors({
        ...errors,
        Image: "Not a valid URL",
      });

      return false;
    }

    return true;
  };

  const validateName = (name) => {
    if (!name) {
      setErrors({
        ...errors,
        Name: "Name is required",
      });
      return false;
    } else if (name.length > 25) {
      setErrors({
        ...errors,
        Name: "Name must at most 25 characters",
      });
      return false;
    }

    return true;
  };

  const validateAge = (age) => {
    if (!age) {
      setErrors({
        ...errors,
        Age: "Age is required",
      });
      return false;
    } else if (age <= 0) {
      setErrors({
        ...errors,
        Age: "Not a valid age (age must be > 0)",
      });
      return false;
    }

    return true;
  };

  const validateType = (type) => {
    if (!type || !petCtx.types.includes(type)) {
      setErrors({
        ...errors,
        Type: "Not a valid type",
      });
      return false;
    }

    return true;
  };

  const validateColor = (color) => {
    if (!color || !petCtx.colors.includes(color)) {
      setErrors({
        ...errors,
        Color: "Not a valid color",
      });
      return false;
    }
    return true;
  };

  const validate = (event, name, value) => {
    //A function to validate each input values
    let inputIsValid = false;

    switch (name) {
      case "Image":
        inputIsValid = validateURL(value);
        break;
      case "Name":
        inputIsValid = validateName(value);
        break;
      case "Age":
        inputIsValid = validateAge(value);
        break;
      case "Type":
        inputIsValid = validateType(value);
        break;
      case "Color":
        inputIsValid = validateColor(value);
        break;
      default:
        break;
    }

    if (inputIsValid) {
      let newObj = omit(errors, name);
      setErrors(newObj);
    }
  };

  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);
    //Let's set these values in state
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    console.log("values:", values)
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("Please check all fields entered correctly");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
