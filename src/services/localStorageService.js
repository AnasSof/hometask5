const PEOPLE_KEY = "people";
const PLANETS_KEY = "planets";
const STARSHIPS_KEY = "starships";

export const setToLocalStoragePeople = (people) => {
  localStorage.setItem(PEOPLE_KEY, JSON.stringify(people));
};

export const getFromLocalStoragePeople = () => {
  return JSON.parse(localStorage.getItem(PEOPLE_KEY));
};

export const setToLocalStoragePlanets = (planets) => {
  localStorage.setItem(PLANETS_KEY, JSON.stringify(planets));
};

export const getFromLocalStoragePlanets = () => {
  return JSON.parse(localStorage.getItem(PLANETS_KEY));
};

export const setToLocalStorageStarships = (starships) => {
  localStorage.setItem(STARSHIPS_KEY, JSON.stringify(starships));
};

export const getFromLocalStorageStarships = () => {
  return JSON.parse(localStorage.getItem(STARSHIPS_KEY));
};

export const getDataByFeature = (feature) => {
  if (feature === "people") {
    return getFromLocalStoragePeople();
  }

  if (feature === "planets") {
    return getFromLocalStoragePlanets();
  }

  if (feature === "starships") {
    return getFromLocalStorageStarships();
  }
};

export const setDataByFeature = (feature, data = []) => {
  if (feature === "people") {
    setToLocalStoragePeople(data);
  }

  if (feature === "planets") {
    setToLocalStoragePlanets(data);
  }

  if (feature === "starships") {
    setToLocalStorageStarships(data);
  }
};
