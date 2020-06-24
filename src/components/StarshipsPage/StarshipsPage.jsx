import React, { useEffect, useState } from "react";
import Table from "../common/Table";
import Form from "../common/Form";
import { getStarships } from "../../services/SwapiService";
import {
  setToLocalStorageStarships,
  getDataByFeature,
} from "../../services/localStorageService";

import { useHistory } from "react-router-dom";
import { getColumnsByFeature } from "../../services/helpers";

const StarshipsPage = (props, context) => {
  const history = useHistory();
  const [starships, setStarships] = useState([]);
  const [selectedStarships, setSelectedStarships] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const dataFromLocalStorage = getDataByFeature("starships");
      if (!dataFromLocalStorage || !dataFromLocalStorage.length) {
        const data = await getStarships();
        setToLocalStorageStarships(data);
        setStarships(data);
      } else {
        setStarships(dataFromLocalStorage);
      }
    };

    getData();
  }, []);

  const toggleAddMode = () => {
    history.push("/form?entity=starships");
  };

  const removeItem = (item) => () => {
    const newStarships = starships.filter(
      (elem) => JSON.stringify(elem) != JSON.stringify(item)
    );
    setStarships((starships) => newStarships);
    setToLocalStorageStarships(newStarships);
  };

  const goToEditStartships = (starship) => {
    history.push(`/form?entity=starships&field=name&value=${starship.name}`);
  };

  return (
    <div className="page-container">
      {(starships && starships.length && (
        <Table
          data={starships.map((item) => ({
            ...item,
            delete: (
              <button
                type="button"
                className="btn btn-primary"
                onClick={removeItem(item)}
              >
                Remove
              </button>
            ),
          }))}
          columns={getColumnsByFeature("starships")}
          onRowClick={goToEditStartships}
          tableDescriptor="Starships"
        />
      )) || <p>No data</p>}
      <button type="button" className="btn btn-primary" onClick={toggleAddMode}>
        Create Starship
      </button>
    </div>
  );
};

export default StarshipsPage;
