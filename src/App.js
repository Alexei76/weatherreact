import React, { Component } from 'react';
import './App.css';
import { Header, Main, Footer } from './components';
import { Home, About,NotFound } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  render() {
  return (
    <Router>
     <Header/>
     <Switch>
     <Route exact path="/"><Home/></Route>
       <Route path="/about"><About/></Route>
       
       <Route path="*"><NotFound/></Route>

     </Switch>
     
     <Footer/>
     </Router>
  
  );
}
}

export default App;

