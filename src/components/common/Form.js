import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import Joi from "joi-browser";
import { peopleSchema } from "../../schemas/peopleSchema";
import { getSchemaByFeature } from "../../services/helpers";

const Form = ({ columns, initialData, onAddData, type }) => {
  const [personData, setPersonData] = useState(initialData);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setPersonData(initialData);
  }, [initialData]);

  useEffect(() => {
    if (type) {
      setIsValid(!Joi.validate(personData, getSchemaByFeature(type)).error);
    }
  }, [personData, setIsValid, type]);

  const handleClick = (event) => {
    event.preventDefault();
    onAddData(personData);
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    const data = { ...personData };
    data[input.name] = input.value;
    setPersonData(data);
  };

  return (
    <form>
      {(columns || []).map(
        (columnName) =>
          columnName !== "delete" && (
            <Input
              key={columnName}
              name={columnName}
              label={columnName}
              value={personData[columnName]}
              type="input"
              onChange={handleChange}
            />
          )
      )}
      <Button
        label="Save"
        classes="alert alert-danger"
        disabled={!isValid}
        onClick={handleClick}
      />
    </form>
  );
};

export default Form;
