import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PageTemplate from 'ui/components/PageTemplate';

import Home from 'ui/modules/Home';
import About from 'ui/modules/About';
import User from 'ui/modules/User';
import NotFound from 'ui/modules/NotFound';

import GithubState from 'context/github/GithubState';

import URL from 'infra/resources/urls';

function App() {
  return (
    <GithubState>
      <BrowserRouter>
        <PageTemplate>
          <Switch>
            <Route exact path={URL.APP.HOME} component={Home} />
            <Route exact path={URL.APP.ABOUT} component={About} />
            <Route exact path="/user/:login/repositories" component={User} />
            <Route exact path="/user/:login/starred" component={User} />

            {/*fallback route*/}
            <Route component={NotFound} />
          </Switch>
        </PageTemplate>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
