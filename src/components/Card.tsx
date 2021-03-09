import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./../GlobalContext";

export default function Card() {
  const { countryData } = useContext(GlobalContext);

  return (
    <div>
      {countryData.map((data: any) => (
        <Link key={data.name} to={`/country/${data.name}`}>
          <div key={data.name}>
            <img src={data.flag} alt="flag" />
            <h3>{data.name}</h3>
            <ul>
              <li>Population: {data.population}</li>
              <li>Region: {data.region}</li>
              <li>Capital: {data.capital}</li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
