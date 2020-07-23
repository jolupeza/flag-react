import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const CountryStyled = styled.article`
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  &:hover .Country__details {
    border: 1px solid var(--textColor);
    border-top: none;
    border-radius: 0 0 5px 5px;
  }
  img {
    border-radius: 5px 5px 0 0;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    width: 100%;
  }
  .Country__figure {
    margin: 0;
  }
  .Country__details {
    background-color: var(--grayBg);
    border: 1px solid transparent;
    border-top: none;
    padding: 1.5rem;
    transition: 0.3s border;
  }
  .Country__name {
    font-size: 1.125rem;
    font-weight: 800;
    margin: 0 0 1rem 0;
  }
  .Country__info {
    margin: 0;
    padding-left: 0;
    text-align: left;
    li {
      font-size: 0.875rem;
      list-style: none;
      margin-bottom: 0.5rem;
      strong {
        font-weight: 800;
      }
    }
  }
`

function Country({ data }) {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/country/${data.name}`)
  }

  return (
    <CountryStyled onClick={handleClick}>
      <figure className="Country__figure">
        <img loading="lazy" src={ data.flag } alt={ data.name } />
      </figure>
      <div className="Country__details">
        <h2 className="Country__name">{ data.name }</h2>
        <ul className="Country__info">
          <li><strong>Population: </strong>{ data.population }</li>
          <li><strong>Región: </strong>{ data.region }</li>
          <li><strong>Capital: </strong>{ data.capital }</li>
        </ul>
      </div>
    </CountryStyled>
  )
}

export default Country
