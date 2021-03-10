import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./../GlobalContext";

export default function Card() {
  const { countryData } = useContext(GlobalContext);
  const [searchCountry, setSearchCountry] = useState("");

  const searchData = (e: any) => {
    const form = e.target;
    setSearchCountry(form.value);
    const filterData = countryData.filter((data: any) =>
      data.name.toLowerCase().includes(form.value)
    );

    // dispatch({type: "SEARCH_COUNTRY", countryData: filterData})
    console.log(searchCountry, filterData);
  };

  return (
    <div>
      <input type="text" onChange={searchData} value={searchCountry} />
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
    </div>
  );
}
