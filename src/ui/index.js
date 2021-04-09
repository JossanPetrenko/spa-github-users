import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PageTemplate from 'ui/components/PageTemplate';

import Home from 'ui/modules/Home';
import About from 'ui/modules/About';
import NotFound from 'ui/modules/NotFound';

import GithubState from 'context/github/GithubState';

function App() {
  return (
    <GithubState>
      <BrowserRouter>
        <PageTemplate>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />

            {/*fallback route*/}
            <Route component={NotFound} />
          </Switch>
        </PageTemplate>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
