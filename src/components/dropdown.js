import React from "react"
import styled from "styled-components"

export const Select = styled.select`
  font-size: 19px;
  font-family: Georgia;
  font-weight: 600;
  box-sizing: border-box;
  margin: 0;
  border: none;
  border-bottom: 2px solid #000;
  padding-bottom: 2px;
  padding-right: 4px;
  cursor: pointer;

  &::-ms-expand {
    display: none;
  }
`
