import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';
import Footer from './Footer';
import Account from './Account';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/account">
            <Account />
            <Footer/>
          </Route>
          <Route path="/">
            <Header setSelectedOption={setSelectedOption}/>
            <Nav setSelectedOption={setSelectedOption}/>
            <Results selectedOption={selectedOption}/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
