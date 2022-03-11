import { createStore, compose } from "redux";
import storeReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  storeReducer,
  composeEnhancers()
);

export default store;