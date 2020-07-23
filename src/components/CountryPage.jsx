import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import { useSelector } from 'react-redux'
import CountrySelected from './CountrySelected'

const CountryPageStyled = styled.div`

`

function CountryPage({ match }) {
  let DBcountry = useSelector(state => state.countries.find(item => item.name === match.params.id.replace('-', ' ')))
  const [country, setCountry] = useState(DBcountry)

  useEffect(() => {
    if (!country) {
      fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
        .then(response => response.json())
        .then(data => {
          setCountry(data[0])
        })
    }
  }, [country, match.params.id])

  return (
    <CountryPageStyled>
      <Wrapper>
        <button>Back</button>
        <CountrySelected {...country} />
      </Wrapper>
    </CountryPageStyled>
  )
}

export default CountryPage
