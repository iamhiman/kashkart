import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Products />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
