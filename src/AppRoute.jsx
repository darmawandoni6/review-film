import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddFilm from "./container/admin/addFilm/AddFilm";
import Admin from "./container/admin/Admin";
import ListFilm from "./container/admin/listFilm/ListFilm";
import Login from "./container/auth/Login";
import Film from "./container/film/Film";
import Home from "./container/home/Home";
const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/film/:id" component={Film} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/list-film" component={ListFilm} />
        <Route exact path="/admin/add-film" component={AddFilm} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
