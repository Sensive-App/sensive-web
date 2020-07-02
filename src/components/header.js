import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: peachpuff;
  margin-bottom: 5rem;
`

export const Header = () => (
  <StyledHeader>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Hej hej
      </Link>
    </h1>
  </StyledHeader>
)
