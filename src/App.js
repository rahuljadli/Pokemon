
import {
  Route, Switch
} from "react-router-dom";
import './App.css';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';

import Layout from './Layout';
import { withRouter } from "react-router";

function App(props) {
  console.log("object")
  return (<>
    <Layout/>
    <Switch>
          
          <Route path="/" exact
          render={ (props)=> {return( <PokemonList {...props} />)} }>
           
          </Route>

          <Route path="/:id" 
          
          render={ (props)=> <Pokemon {...props}  />} >
           
          </Route>
          <Route path="/dashboard" component={Pokemon}>
           dashboard
          </Route>
        </Switch>
        </>
  );
}

export default withRouter(App);
