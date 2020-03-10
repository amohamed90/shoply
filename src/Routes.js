import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
// import Cart from "./Cart";

function Routes(){

  return (
    <Switch>
      <Route exact path="/"><ProductList /></Route>
      <Route exact path="/products/:id"><ProductDetails /></Route>
      {/* <Route exact path="/cart"><Cart /></Route> */}
    </Switch>
  )
};

export default Routes;