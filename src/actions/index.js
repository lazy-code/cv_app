import { createRequestTypes } from "../utils.js";

export const REGISTER_USER = createRequestTypes(
  "REGISTER_USER"
);

export function registerUserAction(name, password) {
  return {
    type: REGISTER_USER.REQUEST,
    payload: { name, password }
  };
}
