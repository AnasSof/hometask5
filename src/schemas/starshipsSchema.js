import Joi from "joi-browser";

export const starshipsSchema = Joi.object().keys({
  name: Joi.string().required(),
  delete: Joi.required(),
});