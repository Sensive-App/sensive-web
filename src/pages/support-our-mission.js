import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import workhard from "../images/work-hard.png"

const Text = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`

const Img = styled.img`
  width: 300px;
  display: block;
  margin: 0 auto;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.rows ? "row" : "column")};
  align-items: ${props => (props.center ? "center" : "flex-start")};
  margin-bottom: ${props => (props.bottom ? props.bottom : "16px")};
`

const SupportOurMissionPage = () => (
  <Layout>
    <SEO title="Support Our Mission" />
    <Img src={workhard} alt="Work Hard" />
    <h1>Support Our Mission</h1>
    <p>
      Sensives mission has always been to inspire thoughtfulness and curiosity
      about the incredible minds we all share. In these uncertain times, it’s
      more important than ever that we have a place to keep that sense of awe
      alive. Our new membership program aims to help strentgthen our ability to
      stay independant and continue to develop our app and unite our community
      so that Sensive can continue to thrive.
    </p>
    <p>
      By becoming a founding member, you’re joining a community of like-minded
      mind lovers who believe deeply in Sensives mission. Your direct support
      allows our small team to help improve mental heath, develop and build
      great software, and continue building out our knowledge about
      pshycological health. Oh, and you’ll get some pretty great perks, too.
    </p>
    <h2>Become a Member </h2>
    <Text>
      Support Sensive and its development with a contribution of at least $5 per
      month or $50 per year. This is a difficult time – anything you can
      contribute helps.{" "}
    </Text>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SupportOurMissionPage
