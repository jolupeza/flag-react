import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.label`
  align-items: center;
  background-color: var(--grayBg);
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  display: inline-flex;
  padding: 0 2rem;
  width: 100%;
  i {
    color: #c4c4c4;
    margin-right: 1rem;
  }
  input {
    background-color: var(--grayBg);
    border: none;
    color: var(--white);
    flex: 1;
    font-size: 0.7rem;
    height: 48px;
    line-height: 48px;
    outline: 0;
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
`

function Input({ ...props }) {
  return (
    <InputStyled>
      <input type="text" { ...props } />
    </InputStyled>
  )
}

export default Input
