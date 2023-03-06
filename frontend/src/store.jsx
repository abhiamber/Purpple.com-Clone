import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { prodreducer } from "./redux/prod/prod.reducer";
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReudcer = combineReducers({
  prod: prodreducer,
});

export const store = legacy_createStore(
  rootReudcer,
  createComposer(applyMiddleware(thunk))
);
