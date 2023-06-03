import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Registry from "./Registry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/registry" component={Registry} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
