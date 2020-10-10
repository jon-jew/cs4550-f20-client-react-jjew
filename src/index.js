import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import * as serviceWorker from './serviceWorker';
import {CourseManager} from "./components/CourseManager";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import fsm from "./reducers/fsmReducer"
import moduleReducer from "./reducers/modulesReducer";


const rootReducer = combineReducers({
  fsm: fsm,
  moduleReducer: moduleReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <CourseManager/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();