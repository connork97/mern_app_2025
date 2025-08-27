import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Users from "./user/pages/Users";
import Places from "./places/pages/Places";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h2>Home works!</h2>
          </Route>
          <Route path='/users'>
            <Users />
          {/* <Route path="/users" component={Users} /> */}
          </Route>
          <Route path='/places'>
            <Places />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
