import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Profile from "./pages/Profile";
import sessionWrapperHOC from "./sessionWrapperHOC";

const Root = ({ refetch, session }) => (
  <Router>
    <Fragment>
      <Header session={session} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" render={() => <Login refetch={refetch} />} />
        <Route path="/join" render={() => <Join refetch={refetch} />} />
        <Route path="/profile" component={Profile} />} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </Router>
);

const RootWithSessionWrapper = sessionWrapperHOC(Root);

function App() {
  return (
    <div id="app">
      <div className="container">
        <RootWithSessionWrapper />
      </div>
    </div>
  );
}

export default App;
