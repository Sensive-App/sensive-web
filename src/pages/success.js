import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import mindful from "../images/mindful.png"
import signatures from "../images/signatures.png"

const Wrapper = styled.div`
  width: 840px;
  max-width: 100%;
  text-align: center;
  min-height: 65vh;
`

const Img = styled.img`
  width: 500px;
  display: block;
  margin: 16px auto;
`
const Signatures = styled.img`
  width: 312px;
  display: block;
  margin: 32px auto;
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

const SuccessPage = () => (
  <Layout>
    <SEO title="Successful payment" />
    <Wrapper>
      <Img src={mindful} alt="Mindful" />
      <h1>Thank you</h1>
      <Text>
        Thank you so much for supporting us in our efforts to stay independent.
        <br />
        We really value your contribution, and we will be in touch shortly with
        more information on what to expect next. Sincerely.
      </Text>
      <Signatures src={signatures} alt="signatures" />
    </Wrapper>
  </Layout>
)

export default SuccessPage
