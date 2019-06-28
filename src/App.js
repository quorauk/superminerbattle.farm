import React from 'react';
import 'bulma'
import './App.css';

import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body.js';

class App extends React.Component {
  render () { 
    return (
      <div className="App">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
