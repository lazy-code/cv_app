import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";
import saga from "./sagas";
import registerUserReducer from "./reducers/registerUser";

const rootReducer = combineReducers({
  registerUserReducer
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );

  sagaMiddleware.run(saga);

  return store;
}
