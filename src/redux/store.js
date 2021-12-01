import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));

export default store;
