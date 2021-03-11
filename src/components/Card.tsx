import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalContext } from "./../GlobalContext";

const Wrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;
  display: grid;
  grid-gap: 64px;

  @media (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Form = styled.form`
  margin-top: 56px;
  @media (min-width: 650px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const Image = styled.img`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const ItemWrapper = styled.div`
  padding: 16px;
`;

export default function Card() {
  const { countryData, allData, mode, dispatch } = useContext(GlobalContext);
  const [searchCountry, setSearchCountry] = useState("");
  const region: string[] = [
    "All countries",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const searchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const form = e.target;
    setSearchCountry(form.value);
    const filterData = allData.filter(
      (data: {
        name: string;
        topLevelDomain: string[];
        alpha2Code: string;
        alpha3Code: string;
        callingCodes: string[];
        capital: string;
        altSpellings: string[];
        region: string;
        subregion: string;
        population: number;
        latlng: number[];
        demonym: string;
        area: number;
        gini: number;
        timezones: string[];
        borders: string[];
        nativeName: string;
        numericCode: string;
        currencies: [
          {
            code: string;
            name: string;
            symbol: string;
          }
        ];
        languages: [
          {
            iso639_1: string;
            iso639_2: string;
            name: string;
            nativeName: string;
          }
        ];
        translations: {
          de: string;
          es: string;
          fr: string;
          ja: string;
          it: string;
          br: string;
          pt: string;
          nl: string;
          hr: string;
          fa: string;
        };
        flag: string;
        regionalBlocs: [
          {
            acronym: string;
            name: string;
            otherAcronyms: string[];
            otherNames: string[];
          }
        ];
        cioc: string;
      }) => data.name.toLowerCase().includes(form.value.toLowerCase())
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

  const Item = styled.div`
    background-color: ${mode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    color: ${mode ? "hsl(0, 0%, 100%)" : "black"};
    max-width: 264px;
    box-shadow: 0px 0px 4px ${mode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 52%)"};
    border-radius: 6px;
  `;

  const Input = styled.input`
    width: 100%;
    max-width: 480px;
    border-radius: 6px;
    border: none;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 17px;
    padding-bottom: 17px;
    background-color: ${mode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    color: ${mode ? "hsl(0, 0%, 100%)" : "black"};
    box-shadow: 0px 0px 4px ${mode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 52%)"};
  `;

  const Select = styled.select`
    width: 100%;
    max-width: 200px;
    border-radius: 6px;
    border: none;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 17px;
    padding-bottom: 17px;
    background-color: ${mode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    color: ${mode ? "hsl(0, 0%, 100%)" : "black"};
    box-shadow: 0px 0px 4px ${mode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 52%)"};
  `;

  return (
    <div>
      <Form>
        <Input type="text" onChange={searchData} value={searchCountry} placeholder="Search for a country..."/>
        <Select onChange={searchByRegion}>
          {region.map((data) => (
            <option value={data} key={data}>
              {data}
            </option>
          ))}
        </Select>
      </Form>
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
