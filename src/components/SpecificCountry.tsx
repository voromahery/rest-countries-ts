import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalContext } from "./../GlobalContext";
export default function SpecificCountry() {
  const { countryData } = useContext(GlobalContext);
  const name: { name: string } = useParams();
  const findCountry = countryData.find(
    (data: {
      flag: string;
      name: string;
      nativeName: string;
      population: number;
      region: string;
      subregion: string;
      capital: string;
      currencies: { name: string };
      topLevelDomain: string[];
      // languages: {
      //   name: string;
      //   iso639_1: string;
      //   iso639_2: string;
      //   nativeName: string;
      // };
      borders: string[];
    }) => data.name === name.name
  );
  console.log(findCountry);

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <div>
        <img src={findCountry.flag} alt="flag" />
        <h3>{findCountry.name}</h3>
        <ul>
          <li>Native Name: {findCountry.nativeName}</li>
          <li>Population: {findCountry.population}</li>
          <li>Region: {findCountry.region}</li>
          <li>Sub Region: {findCountry.subregion}</li>
          <li>Capital: {findCountry.capital}</li>
        </ul>
        <ul>
          <li>
            Top Level Domain:
            {findCountry.topLevelDomain.map((data: string[], index: number) => (
              <div key={data[index]}>{data}</div>
            ))}
          </li>
          <li>
            Currencies:
            {findCountry.currencies.map((data: { name: string }) => (
              <div key={data.name}>{data.name}</div>
            ))}
          </li>
          {/* <li>
            Languages:
            {findCountry.languages.map((data: { name: string }) => data)}
          </li> */}
        </ul>
        <div>
          Border countries
          <ul>
            {findCountry.borders.map((data: string[], index: number) => (
              <li key={data[index]}>
                <button>{data}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
