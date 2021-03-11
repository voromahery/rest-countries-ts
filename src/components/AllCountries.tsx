import React from "react";
import Card from "./Card";
import SpecificCountry from "./SpecificCountry";
import { Switch, Route } from "react-router-dom";
import BorderCountry from './borderCountry';

export default function AllCountries() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Card />
        </Route>
        <Route exact path="/country/:name">
          <SpecificCountry />
        </Route>
        <Route exact path="/border/:border">
          <BorderCountry />
        </Route>
      </Switch>
    </div>
  );
}
