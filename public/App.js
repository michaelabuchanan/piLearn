import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Host from './Host';


function App() {
  return (
    <Router>
      <Header />
      <div class="container-fluid">
        <Switch>
          <Route exact path="/">
            <Host />
          </Route>
          {/* <Route path="/data">
            <Data />
          </Route>
          <Route path="/live-stream/host">
            <Host />
          </Route>
          <Route path="/live-stream/:id?">
            <LiveStream />
          </Route>
          <Route>
            <Error />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;