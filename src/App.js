import React from 'react';
import 'bulma'
import './App.css';

import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body.js';
import EventPage from './EventPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends React.Component {
  render () { 
    return (
      <div className="App">
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/events">
              <EventPage></EventPage>
            </Route>
            <Route>
              <Body></Body>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
