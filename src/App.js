import React, { Component } from 'react';
import './App.css';
import { Header, Main, Footer } from './components';
import { Home, About } from './pages';


class App extends Component {
  render() {
  return (
    <React.Fragment>
     <Header/>
     <Main/>
     <Footer/>
    </React.Fragment>
  );
}
}

export default App;

