import React, { Component } from 'react';
import './App.css';
import { Header, Main, Footer } from './components';


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

