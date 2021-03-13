import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;
