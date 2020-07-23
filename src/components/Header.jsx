import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'

const HeaderStyled = styled.div`
  background: var(--white);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 1em;
  .content {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 80px;
  }
  h1 {
    font-size: 14px;
    a {
      color: var(--textColor);
      text-decoration: none;
    }
  }
  .dark-mode {
    cursor: pointer;
    .moon {
      display: inline-flex;
      margin-right: 10px;
      transform: rotate(-25deg);
    }
    p {
      font-size: 12px;
      font-weight: 600;
      @media screen and (min-width: 768px) {
        font-size: 1rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 3em;
    h1 {
      font-size: 24px;
    }
  }
`

function Header({ setDarkMode, darkMode }) {
  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <h1><Link to="/">Where in the world?</Link></h1>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                {
                  darkMode ?
                    <i className="fas fa-moon"></i> :
                    <i className="far fa-moon"></i>
                }
              </span> Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header
