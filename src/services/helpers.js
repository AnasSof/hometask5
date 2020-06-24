import { peopleSchema } from "../schemas/peopleSchema";
import { planetsSchema } from "../schemas/planetsSchema";
import { starshipsSchema } from "../schemas/starshipsSchema";

export const getColumnsByFeature = (feature) => {
  if (feature === "people") {
    return ["name", "height", "mass", "gender", "birth_year", "delete"];
  }

  if (feature === "planets") {
    return ["name", "climate", "terrain", "population", "created", "delete"];
  }

  if (feature === "starships") {
    return ["name", "delete"];
  }
};

export const getSchemaByFeature = (feature) => {
  if (feature === "people") {
    return peopleSchema;
  }

  if (feature === "planets") {
    return planetsSchema;
  }

  if (feature === "starships") {
    return starshipsSchema;
  }
};
