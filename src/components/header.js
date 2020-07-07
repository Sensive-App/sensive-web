import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import { Circle } from "./circle"

const StyledHeader = styled.header`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
`

const NavWrapper = styled.div`
  width: 1280px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`

const Icon = styled.img`
  height: 44px;
  width: 44px;
  margin-right: 8px;
`

const StyledLink = styled(Link)`
  font-weight: 600;
  line-height: 60px;
  font-size: 16px;
  margin-left: 40px;
  height: 100%;

  span {
    color: #737373;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;
  }

  &.active span,
  &:hover span {
    color: #000;
    border-bottom: 2px solid;
  }
`

const Line = styled.div`
  background: #ccc;
  display: inline-block;
  height: 100%;
  width: 1px;
  margin: 0 24px;
`

const Button = styled(Link)`
  height: 40px;
  background: #000;
  color: #fff;
  border-radius: 4px;
  padding: 0 16px;
  font-weight: 600;
  line-height: 40px;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: #222;
  }
`

export const Header = () => (
  <StyledHeader>
    <NavWrapper>
      <Link to="/">
        <Nav>
          <Icon src={logo} alt="logo" />
          <Circle time={15} />
        </Nav>
      </Link>

      <Nav>
        <StyledLink to="/" activeClassName="active">
          <span>Sensive</span>
        </StyledLink>
        <StyledLink to="/support-our-mission" activeClassName="active">
          <span>Support our mission</span>
        </StyledLink>
        <Line />
        <Button to="/beta">Download Free App</Button>
      </Nav>
    </NavWrapper>
  </StyledHeader>

)
