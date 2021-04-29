import { createBrowserHistory } from "history";
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";
import App from './App';
import './index.css';
import Layout from './Layout';
import PokemonList from './PokemonList';

import { withRouter } from "react-router";

const history = createBrowserHistory();

ReactDOM.render(
  <Router  history={history}>
 
    <App />
    
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

