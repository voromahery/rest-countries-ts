import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import arrowBackWhite from "../icons/arrow-back-white.svg";
import arrowBackDark from "../icons/arrow-back-dark.svg";
import styled from "styled-components";
import { GlobalContext } from "./../GlobalContext";

const SpecificCountryContainer = styled.div`
  height: 100%;
  padding-left: 18px;
  padding-right: 18px;
  @media (min-width: 650px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

const Icon = styled.img`
  max-width: 32px;
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

const SCTitle = styled.h3`
  font-size: 28px;
  @media (min-width: 300px) {
    font-size: 32px;
  }
  @media (min-width: 800px) {
    font-size: 52px;
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
    <SpecificCountryContainer
      className={`${mode ? "light-container" : "dark-container"} container`}
    >
      <Link to="/">
        <Button className={`${mode ? "back-light-mode" : "back-dark-mode"}`}>
          {mode ? (
            <Icon src={arrowBackWhite} alt="back-arrow" />
          ) : (
            <Icon src={arrowBackDark} alt="back-arrow" />
          )}{" "}
          Back
        </Button>
      </Link>
      <Wrapper>
        <Image src={findCountry.flag} alt="flag" />
        <Details>
          <SCTitle>{findCountry.name}</SCTitle>
          <ul>
            <li>
              <b>Native Name:</b> {findCountry.nativeName}
            </li>
            <li>
              <b>Population:</b> {findCountry.population}
            </li>
            <li>
              <b>Region:</b> {findCountry.region}
            </li>
            <li>
              <b>Sub Region:</b> {findCountry.subregion}
            </li>
            <li>
              <b>Capital:</b> {findCountry.capital}
            </li>
          </ul>
          <ul>
            <li>
              <b>Top Level Domain:</b>
              {findCountry.topLevelDomain.map(
                (data: string[], index: number) => (
                  <div key={data[index]}>{data}</div>
                )
              )}
            </li>
            <li>
              <b>Currencies:</b>
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
                <b>Border countries</b>
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
