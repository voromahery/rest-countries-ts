import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "./../GlobalContext";

const SpecificCountryContainer = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  @media (min-width: 650px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
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
    height: max-content;
  }
`;

const Details = styled.div`
  @media (min-width: 650px) {
    flex-basis: 50%;
  }
`;

export default function SpecificCountry() {
  const { allData, mode } = useContext(GlobalContext);
  const name: { name: string } = useParams();
  const findCountry = allData.find(
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

  return (
    <SpecificCountryContainer className={`${mode ? "light-container" : "dark-container"} container`}>
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
                    const findCity = allData.find(
                      (item: { alpha3Code: string; alpha2Code: string }) =>
                        item.alpha3Code === data || item.alpha2Code === data
                    );

                    return (
                      <Link key={data[index]} to={`/border/${data}`}>
                        <button
                          className={`${
                            mode ? "button-light-mode" : "button-dark-mode"
                          }`}
                        >
                          {findCity && findCity.name}
                        </button>
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
    </SpecificCountryContainer>
  );
}
