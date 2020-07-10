import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion, useCycle } from "framer-motion"

import logo from "../images/logo.png"
import { Circle } from "./circle"
import { MenuToggle } from "./menuToggle"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 60px 60px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(4px at 760px 60px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30vh;
`

const MobileMenuLink = styled(Link)`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 24px;
  color: #fff;

  &.active {
    border-bottom: 2px solid #fff;
  }
`

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

  @media (max-width: 480px) {
    padding: 0 16px;
  }
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

  @media (max-width: 480px) {
  }
`

const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  margin-left: 40px;

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

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, toggleOpen] = useCycle(false, true)

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true)
  }, [])

  return (
    <StyledHeader>
      <NavWrapper>
        <Link to="/">
          <Nav>
            <Icon src={logo} alt="logo" />
            <Circle time={15} />
          </Nav>
        </Link>

        {isMobile ? (
          <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
            <Background variants={sidebar}>
              <MobileMenuLink to="/" activeClassName="active">
                Sensive
              </MobileMenuLink>
              <MobileMenuLink
                to="/support-our-mission"
                activeClassName="active"
              >
                Support our mission
              </MobileMenuLink>
              <MobileMenuLink to="/beta" activeClassName="active">
                Download Free App
              </MobileMenuLink>
            </Background>
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        ) : (
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
        )}
      </NavWrapper>
    </StyledHeader>
  )
}
