import React, { useEffect, useState } from "react";
import Table from "../common/Table";
import Form from "../common/Form";
import { getPlanets } from "../../services/SwapiService";
import {
  setToLocalStoragePlanets,
  getDataByFeature,
} from "../../services/localStorageService";

import { useHistory } from "react-router-dom";
import { getColumnsByFeature } from "../../services/helpers";

const PlanetsPage = (props, context) => {
  const history = useHistory();
  const [planets, setPlanets] = useState([]);
  const [selectedPlanets, setSelectedPlanets] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const dataFromLocalStorage = getDataByFeature("planets");
      if (!dataFromLocalStorage || !dataFromLocalStorage.length) {
        const data = await getPlanets();
        setToLocalStoragePlanets(data);
        setPlanets(data);
      } else {
        setPlanets(dataFromLocalStorage);
      }
    };

    getData();
  }, []);

  const toggleAddMode = () => {
    history.push("/form?entity=planets");
  };

  const removeItem = (item) => () => {
    const newPlanets = planets.filter(
      (elem) => JSON.stringify(elem) != JSON.stringify(item)
    );
    setPlanets((planets) => newPlanets);
    setToLocalStoragePlanets(newPlanets);
  };

  const goToEditHuman = (human) => {
    history.push(`/form?entity=planets&field=name&value=${human.name}`);
  };

  return (
    <div className="page-container">
      {(planets && planets.length && (
        <Table
          data={planets.map((item) => ({
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
          columns={getColumnsByFeature("planets")}
          onRowClick={goToEditHuman}
          tableDescriptor="Planets"
        />
      )) || <p>No data</p>}
      <button type="button" className="btn btn-primary" onClick={toggleAddMode}>
        Create Planet
      </button>
    </div>
  );
};

export default PlanetsPage;
