import React, { useState } from 'react'
import styled from 'styled-components'
import Input from './Input'
import { useDispatch } from 'react-redux'

const SearchStyled = styled.div`
  display: flex;
  position: relative;
  .close {
    border: none;
    border-radius: 50%;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
    position: absolute;
    right: 1em;
    top: 1em;
  }
`

function Search() {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const filterByName = (e) => {
    setInputValue(e.target.value)

    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: inputValue
    })
  }

  const clearInput = () => {
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: ''
    })

    setInputValue('')
  }

  return (
    <SearchStyled>
      {
        inputValue && <i className="fas fa-times close" onClick={ clearInput }></i>
      }
      <Input placeholder="Search for a country..." value={ inputValue } onChange={ filterByName } />
    </SearchStyled>
  )
}

export default Search
