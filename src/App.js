import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Nav } from "./components";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter basename="/react-todo">
      <Nav />
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
