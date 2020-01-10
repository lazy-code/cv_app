import { put, takeLatest, all } from "redux-saga/effects";
import { REGISTER_USER } from "../actions";

export function* registerUserSaga(action) {
  const { name, password } = action.payload;
  let errorMessage = "";
  let isCredentialsValid = true;

  if (!name || !password) {
    errorMessage = "Please fill all fields";
    isCredentialsValid = false;
  }

  if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
    errorMessage = "Password must at least 8 chars long, has one number, uppercase and lovercase letters";
    isCredentialsValid = false;
  }

  if (isCredentialsValid) {
    localStorage.setItem(name, JSON.stringify({ name, password }));

    yield put({
      type: REGISTER_USER.SUCCESS
    });
  } else {
    yield put({
      type: REGISTER_USER.FAILURE,
      payload: {
        errorMessage
      }
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(REGISTER_USER.REQUEST, registerUserSaga)
  ]);
}
