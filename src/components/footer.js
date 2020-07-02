import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: powderblue;
  margin-top: 5rem;
`

export const Footer = () => (
  <StyledFooter>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </StyledFooter>
)
