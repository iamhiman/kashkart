import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />

      </Switch>
    </>
  );
}

export default App;
