import React, { useState, useEffect } from "react";
import { getColumnsByFeature } from "../../services/helpers";
import {
  getDataByFeature,
  setDataByFeature,
} from "../../services/localStorageService";
import Form from "./Form";
import useQuery from "../../services/useQuery";
import { useHistory } from "react-router-dom";

const GeneralForm = () => {
  let query = useQuery();
  let history = useHistory();
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [field, setField] = useState("");

  useEffect(() => {
    setType(query.get("entity") || "people");
    setField(query.get("field"));
    setValue(query.get("value"));
  }, []);

  const getInitialData = () => {
    const columns = getColumnsByFeature(type);
    if (value) {
      const data = getDataByFeature(type);
      if (data && data.length) {
        const found = data.find(
          ({ [field]: currentValue }) => currentValue === value
        );

        if (found) {
          return columns.reduce((cols, columnName) => {
            cols[columnName] = found[columnName] || "";
            return cols;
          }, {});
        }
      }
    }

    return (columns || []).reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const addData = (newData) => {
    let data = getDataByFeature(type);
    const foundIndex = data.findIndex((elem) => elem[field] === value);
    if (foundIndex > -1) {
      data[foundIndex] = newData;
    } else {
      data = [...data, newData];
    }
    setDataByFeature(type, data);
    history.goBack();
  };

  return (
    <div className="form-container">
      <Form
        initialData={getInitialData()}
        columns={getColumnsByFeature(type)}
        onAddData={addData}
        type={type}
      />
    </div>
  );
};

export default GeneralForm;
