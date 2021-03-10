import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalContext } from "./../GlobalContext";

const Wrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;
  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 64px;
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 200px;
`;

const Image = styled.img`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const Item = styled.div`
  max-width: 264px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px hsl(0, 0%, 52%);
  border-radius: 6px;
`;

const ItemWrapper = styled.div`
  padding: 16px;
`;

export default function Card() {
  const { countryData, allData, dispatch } = useContext(GlobalContext);
  const [searchCountry, setSearchCountry] = useState("");
  const region: string[] = [
    "All countries",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const searchData = (e: any) => {
    const form = e.target;
    setSearchCountry(form.value);
    const filterData = allData.filter((data: any) =>
      data.name.toLowerCase().includes(form.value.toLowerCase())
    );
    dispatch({ type: "SEARCH_COUNTRY", payload: filterData });
  };

  const searchByRegion = (e: any) => {
    const filterRegion = allData.filter(
      (data: any) => data.region === e.target.value
    );
    if (e.target.value === "All countries") {
      dispatch({ type: "SEARCH_BY_REGION", payload: allData });
    } else {
      dispatch({ type: "SEARCH_BY_REGION", payload: filterRegion });
    }
  };

  return (
    <div>
      <form>
        <Input type="text" onChange={searchData} value={searchCountry} />
        <select onChange={searchByRegion}>
          {region.map((data) => (
            <option value={data} key={data}>
              {data}
            </option>
          ))}
        </select>
      </form>
      <Wrapper>
        {countryData.map(
          (data: {
            name: string;
            flag: string;
            population: number;
            region: string;
            capital: string;
          }) => (
            <Item key={data.name}>
              <Link to={`/country/${data.name}`}>
                <div>
                  <Image src={data.flag} alt="flag" />
                  <ItemWrapper>
                    <h3>{data.name}</h3>
                    <ul>
                      <li>Population: {data.population}</li>
                      <li>Region: {data.region}</li>
                      <li>Capital: {data.capital}</li>
                    </ul>
                  </ItemWrapper>
                </div>
              </Link>
            </Item>
          )
        )}
      </Wrapper>
    </div>
  );
}
