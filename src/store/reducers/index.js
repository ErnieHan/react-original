import { combineReducers } from "redux";
// import * as ActionTypes from "../actionTypes";
import app from "./app";
import fetchTest from "./fetchTest";

const reducers = combineReducers({
  app,
  fetchTest
});

export default reducers;
