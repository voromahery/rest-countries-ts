import React, { useContext } from "react";
import styled from "styled-components";
import arrowBackWhite from "../icons/arrow-back-white.svg";
import arrowBackDark from "../icons/arrow-back-dark.svg";
import { useParams, Link } from "react-router-dom";
import { GlobalContext } from "./../GlobalContext";

const BorderCountryContainer = styled.section`
  height: 100%;
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

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

const Icon = styled.img`
  max-width: 32px;
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

const BCTitle = styled.h3`
  font-size: 28px;
  @media (min-width: 300px) {
    font-size: 32px;
  }
  @media (min-width: 800px) {
    font-size: 52px;
  }
`;

export default function BorderCountry() {
  const { allData, mode } = useContext(GlobalContext);
  const border: { border: string } = useParams();

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
      alpha3Code: string;
      borders: string[];
    }) => data.alpha3Code === border.border
  );

  return (
    <BorderCountryContainer
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
          <BCTitle>{findCountry.name}</BCTitle>
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
            {/*<li>
            Languages:
            {findCountry.languages.map((data: { name: string }) => data)}
          </li> */}
          </ul>
          <div>
            Border countries
            <ul>
              <div>
                {findCountry.borders.length > 0 ? (
                  <div>
                    Border countries
                    <ul>
                      {findCountry.borders.map(
                        (data: string, index: number) => {
                          const findCity = allData.find(
                            (item: { alpha3Code: string }) =>
                              item.alpha3Code === data
                          );

                          return (
                            <Link key={data[index]} to={`/border/${data}`}>
                              <button
                                className={`${
                                  mode
                                    ? "button-light-mode"
                                    : "button-dark-mode"
                                }`}
                              >
                                {findCity && findCity.name}
                              </button>
                            </Link>
                          );
                        }
                      )}
                    </ul>
                  </div>
                ) : (
                  <p>This country has no border country.</p>
                )}
              </div>
            </ul>
          </div>
        </Details>
      </Wrapper>
    </BorderCountryContainer>
  );
}
