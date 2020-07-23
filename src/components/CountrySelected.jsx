import React from 'react'
import styled from 'styled-components'

const CountrySelectedStyled = styled.div`
  .languages {
    span {
      margin-right: 10px;
      &:after {
        content: ','
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
`

function CountrySelected({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = []
}) {
  return (
    <CountrySelectedStyled>
      <h2>{name}</h2>
      <p><strong>Native Name:</strong> {nativeName}</p>
      <p><strong>Population:</strong> {population}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Sub Region:</strong> {subregion}</p>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
      <p><strong>Currencies:</strong> {currencies.map(currency => <span>{currency.demonym}</span>)}</p>
      <p className="languages"><strong>Languages:</strong> {languages.map(language => <span>{language.name}</span>)}</p>
      <p className="borders"><strong>Borders:</strong> {borders.map(border => <span>{border}</span>)}</p>
      <img src={flag} alt="" />
    </CountrySelectedStyled>
  )
}

export default CountrySelected;
