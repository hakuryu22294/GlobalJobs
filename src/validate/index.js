import Joi from "joi";

export const registerValid = Joi.object({
  name: Joi.string().required().min(3).max(30).messages({
    "string.min": "Name must be at least 3 characters",
    "string.max": "Name must be at most 30 characters",
    "any.required": "Name is required",
  }),
  email: Joi.string().required().email().messages({
    "string.email": "Email must be valid",
    "any.required": "Email is required",
  }),
  password: Joi.string()
    .required()
    .min(6)
    .max(30)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .messages({
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password must be at most 30 characters",
      "string.pattern.base": "Password must be alphanumeric",
      "any.required": "Password is required",
    }),
});

export const loginValid = Joi.object({
  email: Joi.string().required().email().messages({
    "string.email": "Email must be valid",
    "any.required": "Email is required",
  }),
  password: Joi.string()
    .required()
    .min(6)
    .max(30)
    .pattern(new RegExp("^[a-zA-Z0-9]$"))
    .messages({
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password must be at most 30 characters",
      "string.pattern.base": "Password must be alphanumeric",
      "any.required": "Password is required",
    }),
});
