import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "./../GlobalContext";

const Wrapper = styled.div`
  @media (min-width: 650px) {
    display: flex;
    flex-direction: row;
    gap: 64px;
    flex-wrap: nowrap;
  }
`;

const Image = styled.img`
  @media (min-width: 650px) {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

const Details = styled.div`
  @media (min-width: 650px) {
    flex-basis: 50%;
  }
`;

export default function SpecificCountry() {
  const { countryData, mode } = useContext(GlobalContext);
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
  const Container = styled.div`
    background-color: ${mode ? "hsl(207, 26%, 17%)" : " hsl(0, 0%, 98%)"};
    height: 100vh;
  `;

  const Button = styled.button`
    border: none;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 6px;
    padding-bottom: 6px;
    margin-right: 10px;
    margin-bottom: 16px;
    background-color: ${mode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    color: ${mode ? "hsl(0, 0%, 100%)" : "black"};
    box-shadow: 0px 0px 4px ${mode?"hsl(207, 26%, 17%)":"hsl(0, 0%, 52%)"};
  `;

  return (
    <Container>
      <Link to="/">
        <button>Back</button>
      </Link>
      <Wrapper>
        <Image src={findCountry.flag} alt="flag" />
        <Details>
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
              {findCountry.topLevelDomain.map(
                (data: string[], index: number) => (
                  <div key={data[index]}>{data}</div>
                )
              )}
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
            {findCountry.borders.length > 0 ? (
              <div>
                Border countries
                <ul>
                  {findCountry.borders.map((data: string, index: number) => {
                    const findCity = countryData.find(
                      (item: { alpha3Code: string; alpha2Code: string }) =>
                        item.alpha3Code === data || item.alpha2Code === data
                    );

                    return (
                      <Link key={data[index]} to={`/border/${data}`}>
                        <Button>{findCity && findCity.name}</Button>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <p>This country has no border country.</p>
            )}
          </div>
        </Details>
      </Wrapper>
    </Container>
  );
}
