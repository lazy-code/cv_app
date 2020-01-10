import { REGISTER_USER } from "../actions";

const initialState = {
  succesRegister: false,
  loading: false,
  errorMessage: ""
};

export default function registerUserReducer(state = initialState, action) {
  switch (action.type) {
      case REGISTER_USER.REQUEST:
        return Object.assign({}, state, {
          loading: true
        })
      case REGISTER_USER.SUCCESS:
        return Object.assign({}, state, {
          succesRegister: true,
          loading: false
        })
      case REGISTER_USER.FAILURE:
        return Object.assign({}, state, {
          loading: false,
          succesRegister: false,
          errorMessage: action.payload.errorMessage
        })
      default:
          return state;
  }
}
