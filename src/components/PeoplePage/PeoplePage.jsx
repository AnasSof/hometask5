import React, { useEffect, useState } from "react";
import Table from "../common/Table";
import Form from "../common/Form";
import { getPeople } from "../../services/SwapiService";
import {
  setToLocalStoragePeople,
  getDataByFeature,
} from "../../services/localStorageService";

import { useHistory } from "react-router-dom";
import { getColumnsByFeature } from "../../services/helpers";

const PeoplePage = (props, context) => {
  const history = useHistory();
  const [people, setPeople] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const dataFromLocalStorage = getDataByFeature("people");
      if (!dataFromLocalStorage || !dataFromLocalStorage.length) {
        const data = await getPeople();
        setToLocalStoragePeople(data);
        setPeople(data);
      } else {
        setPeople(dataFromLocalStorage);
      }
    };

    getData();
  }, []);

  const toggleAddMode = () => {
    history.push("/form?entity=people");
  };

  const removeItem = (item) => () => {
    const newPeople = people.filter(
      (elem) => JSON.stringify(elem) != JSON.stringify(item)
    );
    setPeople((people) => newPeople);
    setToLocalStoragePeople(newPeople);
  };

  const goToEditHuman = (human) => {
    history.push(`/form?entity=people&field=name&value=${human.name}`);
  };

  return (
    <div className="page-container">
      {(people && people.length && (
        <Table
          data={people.map((item) => ({
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
          columns={getColumnsByFeature("people")}
          onRowClick={goToEditHuman}
          tableDescriptor="People"
        />
      )) || <p>No data</p>}
      <button type="button" className="btn btn-primary" onClick={toggleAddMode}>
        Create Person
      </button>
    </div>
  );
};

export default PeoplePage;
