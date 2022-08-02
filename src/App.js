import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import NavComp from "./components/NavComp";
import CreateCustomer from "./components/CreateCustomer";
import CreateHall from "./components/CreateHall";
import BookHall from "./components/BookHall";
import Customer from "./components/Customer";
import Hall from "./components/Hall";

function App() {
  return (
    <>
      <Router>
        <NavComp />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create-customer">
            <CreateCustomer />
          </Route>
          <Route exact path="/create-hall">
            <CreateHall />
          </Route>
          <Route exact path="/halls">
            <Hall />
          </Route>
          <Route exact path="/customers">
            <Customer />
          </Route>
          <Route exact path="/book-hall/:id">
            <BookHall />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
