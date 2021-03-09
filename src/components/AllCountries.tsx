import React from "react";
import Card from "./Card";
import SpecificCountry from "./SpecificCountry";
import { Switch, Route } from "react-router-dom";

export default function AllCountries() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Card />
        </Route>
        <Route exact path="/country/:countryName">
          <SpecificCountry />
        </Route>
      </Switch>
    </div>
  );
}
