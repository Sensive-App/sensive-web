import React from "react"
import styled, { keyframes } from "styled-components"
import circle from "../images/circle.png"

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(360deg);
  }
`

export const Circle = styled.img.attrs({
  src: circle,
})`
  width: ${props => (props.size ? `${props.size}px` : "44px")};
  height: ${props => (props.size ? `${props.size}px` : "44px")};
  margin: 0;
  animation: ${rotation} ${props => (props.time ? `${props.time}s` : "30s")}
    infinite linear;
`
