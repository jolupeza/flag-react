import React, { useEffect } from 'react'
import styled from 'styled-components'
import Country from './Country'
import Wrapper from './Wrapper'
import { useSelector, useDispatch } from 'react-redux'

const CountryListStyled = styled.section`
  display: grid;
  grid-row-gap: 2.25rem;
  grid-auto-flow: columns;
  grid-column-gap: 75px;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  padding: 3rem 0;
`
function CountryList() {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)

  useEffect(() => {
    let url = `https://restcountries.eu/rest/v2/all`

    fetch(url)
      .then((response) => response.json())
      .then(data => {
        dispatch({
          type: 'SET_COUNTRIES',
          payload: data
        })
      })
      .catch((error) => console.error(error))
  }, [dispatch])

  return (
    <Wrapper>
      <CountryListStyled>
        {
          countries.map(country => {
            return (
              <Country key={ country.numericCode } data={ country } />
            )
          })
        }
      </CountryListStyled>
    </Wrapper>
  )
}

export default CountryList
