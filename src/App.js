import React from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout/">
            <h1>i am checkout</h1>
          </Route>
          <Route path="/login">
            <h1>i am login</h1>
          </Route>
          <Route path="/">
          <Header />
          </Route>
        </Switch>
      </div>


    </Router>
  );
}

export default App;
