import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import mindful from "../images/mindful.png"

const Wrapper = styled.div`
  width: 840px;
  text-align: center;
  min-height: 65vh;
`

const Img = styled.img`
  width: 500px;
  display: block;
  margin: 16px auto;
`

const Text = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-top: 16px;
  text-align: left;
`

const RedLink = styled.a`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #ff132e;
  text-decoration: underline;
`

const BetaPage = () => (
  <Layout>
    <SEO title="Request Beta" />
    <Wrapper>
      <Img src={mindful} alt="Mindful" />
      <h1>Built around you</h1>
      <Text>
        Sensive is built around you. By having a daily check-in with yourself
        you’ll slowly learn more about yourself and discover ways to improve
        your mood and mental state of mind. We are still in private beta.{" "}
        <RedLink href="https://sensive.typeform.com/to/faROWzIv" target="_new">Request Access</RedLink>
      </Text>
    </Wrapper>
  </Layout>
)

export default BetaPage
