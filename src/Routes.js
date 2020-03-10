import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import CartList from "./CartList";

function Routes(){

  return (
    <Switch>
      <Route exact path="/"><ProductList /></Route>
      <Route exact path="/products/:id"><ProductDetails /></Route>
      <Route exact path="/cart"><CartList /></Route>
      <Redirect to="/" />
    </Switch>
  )
};

export default Routes;