import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';

import Welcome from "./page/Welcome";
import Products from "./page/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./page/ProductDetail";

function App() {
  return (
      <React.Fragment>
    <div>
      <MainHeader/>
      <main>
        <Switch>
      <Route path="/" exact><Redirect to ="welcome"/></Route>
      <Route path="/welcome"><Welcome /></Route>
      <Route path="/products" exact><Products /></Route>
      <Route path="/products/:productId"><ProductDetail /></Route>
        </Switch>
        </main>
    </div>
      </React.Fragment>
  );
}

export default App;
