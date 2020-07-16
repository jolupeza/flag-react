import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

const FilterByRegionStyled = styled.select`
  @import url('https://fonts.google.com/specimen/Nunito+Sans');

  * {
      box-sizing: border-box;
  }
  .dropdown {
    border-radius: 5px;
    background-color: var(--white);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    text-align: center;
    font-size: 12px;
    padding: 20px;
    position: relative;
    background: var(--white);
  }
  .btn-toggle .fas {
    display: none;
  }
  body.dark .btn-toggle .fas {
    display: inline-block;
  }
  .dropdown .fa-chevron-down {
    margin-left: 10px;
  }
  .dropdown ul {
    border-radius: 4px;
    background-color: var(--background-el);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
    display: none;
    padding: 10px;
    text-align: center;
    position: absolute;
    top: 100%;
    left: 0;
    list-style-type: none;
    background: var(--white);
    width: 100%;
    z-index: 99;
  }
  .dropdown.open ul {
    display: block;
  }
  .dropdown ul li {
    margin: 10px 0;
  }
`

const filterByRegionAction = regionSelected => {
  return {
    type: 'FILTER_BY_REGION',
    payload: { regionSelected }
  }
}

function FilterByRegion() {
  const dispatch = useDispatch()
  const [dropdown, setDropdown] = useState(false)
  const filterByRegion = useSelector(state => state.filterByRegion)

  const onRegionChange = (selectEvent) => {
    dispatch(filterByRegionAction(selectEvent))
  }

  return (
    <FilterByRegionStyled>
      <div
        className={ `${dropdown ? 'dropdown open' : 'dropdown' }`}
        onClick={() => setDropdown(!dropdown)}
        id="filter">
        <i className="fas fa-chevron-down"></i>
        <ul>
          <li onClick={ () => onRegionChange('África') }>África</li>
          <li onClick={ () => onRegionChange('Américas') }>Américas</li>
          <li onClick={ () => onRegionChange('Asia') }>Asia</li>
          <li onClick={ () => onRegionChange('Europa') }>Europa</li>
          <li onClick={ () => onRegionChange('Oceanía') }>Oceanía</li>
        </ul>
      </div>
    </FilterByRegionStyled>
  )
}

export default FilterByRegion
