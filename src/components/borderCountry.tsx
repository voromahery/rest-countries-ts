import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalContext } from "./../GlobalContext";
export default function BorderCountry() {
  const { countryData } = useContext(GlobalContext);
  const border: { border: string } = useParams();

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
      alpha3Code: string;
      borders: string[];
    }) => data.alpha3Code === border.border
  );
  console.log(findCountry, border);

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
            {findCountry.borders.map((data: string, index: number) => {
              const findCity = countryData.find((item: {alpha3Code: string}) => item.alpha3Code === data)
              console.log(findCity);
              return (
              <Link key={data[index]} to={`/border/${data}`}>
                <button>{findCity.name}</button>
              </Link>
            )})}
          </ul>
        </div>
      </div>
    </div>
  );
}