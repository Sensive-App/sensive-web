/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import { Header } from "./header"
import { Footer } from "./footer"
import "./layout.css"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

const Main = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 1280px;
  padding: 48px 24px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 48px 16px;
  }
`

const Layout = ({ children }) => (
  <>
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </Helmet>
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
