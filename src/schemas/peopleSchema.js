import Joi from "joi-browser";

export const peopleSchema = Joi.object().keys({
  name: Joi.string().required(),
  height: Joi.string().required(),
  mass: Joi.string().required(),
  gender: Joi.string().required(),
  birth_year: Joi.string().required(),
  delete: Joi.required(),
});
