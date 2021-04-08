import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "ui/modules/Home";
import Login from "ui/modules/Login";
import NotFound from "ui/modules/NotFound";

function App() {
  const [isLogged, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render
          render={() => {
            return isLogged ? (
              <Redirect to="/home" />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />

        {/*fallback route*/}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
