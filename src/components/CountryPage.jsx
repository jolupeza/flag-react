import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'

const CountryPageStyled = styled.div`

`

function CountryPage({ match }) {
  return (
    <CountryPageStyled>
      <Wrapper>
        { match.params.id }
      </Wrapper>
    </CountryPageStyled>
  )
}

export default CountryPage
