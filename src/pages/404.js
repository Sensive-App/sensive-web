import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import lostinwords from "../images/lost-in-words.png"

const Img = styled.img`
  width: 320px;
  display: block;
  margin: 16px auto;
`

const Text = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-top: 16px;
`

const SmallText = styled.p`
  font-size: 18px;
  line-height: 32px;
`

const RedLink = styled.a`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #ff132e;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Img src={lostinwords} alt="Lost In Words" />
    <h1>There is something missing </h1>
    <Text>
      We don’t know why you ended up here. But one thing is certain you should
      not stick around. It’s dangerous and semi-spoky here.{" "}
      <RedLink>Download our app</RedLink>
    </Text>
    <SmallText>404 Sorry. had to put this here. Developer made me.</SmallText>
  </Layout>
)

export default NotFoundPage
