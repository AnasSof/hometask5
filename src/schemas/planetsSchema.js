import Joi from "joi-browser";

export const planetsSchema = Joi.object().keys({
  name: Joi.string().required(),
  climate: Joi.string().required(),
  terrain: Joi.string().required(),
  population: Joi.string().required(),
  created: Joi.string().required(),
  delete: Joi.required(),
});