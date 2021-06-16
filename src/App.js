import logo from './logo.svg';
import './App.css';

import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Login from './Pages/Login' 

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav'


function App() {
  return (
    <Router>
      <div className="App">
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={Login}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
