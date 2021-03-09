import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalContext } from "./../GlobalContext";
export default function SpecificCountry() {
  const { countryData } = useContext(GlobalContext);
  const countryName:string = useParams();
  const findCountry = countryData.find((data: any) => data.name === countryName );
  console.log(findCountry, countryName);
  
  return (
    <div>
      {/* <Link to="/">
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
          <li>Top Level Domain: {findCountry.topLevelDomain}</li>
          <li>Currencies: {findCountry.currencies}</li>
          <li>Languages: {findCountry.languages}</li>
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
      </div> */}
    </div>
  );
}
