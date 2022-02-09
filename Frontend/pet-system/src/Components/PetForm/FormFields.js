// import * as validator from "../FormValidator/FormValidator";

const FormFields = [
  {
    id: 1,
    name: "Image",
    placeholder: "Image",
    type: "text",
    inputType: "text"
  },

  {
    id: 2,
    name: "Name",
    placeholder: "Name",
    type: "name",
    inputType: "text"
  },

  {
    id: 3,
    name: "Age",
    placeholder: "Age",
    type: "number",
    inputType: "text"
  },

  {
    id: 4,
    name: "Type",
    placeholder: "Type",
    inputType: "select",
    options: ["Dog", "Cat", "Horse", "Other"],
  },

  {
    id: 5,
    name: "Color",
    placeholder: "Color",
    inputType: "radio",
    options: ["Black", "White"],
 
  },
];

export default FormFields;
