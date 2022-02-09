import { property } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import "./PetForm.css";

const FormInput = (props) => {
  switch (props.inputType) {
    case "text":
      return (
        <div className="input-warpper">
          <fieldset>
            <input
              className="text-input"
              placeholder={props.placeholder}
              onChange={props.onChange}
              name={props.name}
              type={props.type}
            >
              {props.children}
            </input>
          </fieldset>
          {props.error && <div className="error-message">{props.error}</div>}
        </div>
      );

    case "radio": {
      return (
        <fieldset title={props.placeholder}>
          {props.options.map((option) => {
            return (
              <label key={option}>
                <input
                  key={option}
                  type="radio"
                  value={option}
                  onChange={props.onChange}
                  name={props.name}
                  placeholder={option}
                />
                {option}
              </label>
            );
          })}
        </fieldset>
      );
    }
    case "select": {
      return (
        <fieldset>
          <select
            required
            title={props.placeholder}
            name={props.name}
            onChange={props.onChange}
          >
            <option selected disabled>
              Choose Pet Type
            </option>
            {props.options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </fieldset>
      );
    }
  }
};

export default FormInput;
