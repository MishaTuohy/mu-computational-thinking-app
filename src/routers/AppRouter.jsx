import { Route, Router, Routes } from "react-router-dom";
import * as view from '../views';
import * as ROUTES from '../constants/routes'
import { Component } from "react";

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path={ ROUTES.HOME } element={ view.Home } errorElement={view.ErrorPage} />
          <Route path={ ROUTES.GAME } element={ view.Game } errorElement={view.ErrorPage} />
        </Routes>
      </Router>
    );
  }
}
