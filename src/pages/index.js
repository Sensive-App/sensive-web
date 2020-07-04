import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import appstore from "../images/appstore-btn.png"
import ok from "../images/ok.png"
import suckedin from "../images/sucked-in.png"
import circles from "../images/circles.png"
import { Circle } from "../components/circle"

const Text = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`

const RedLink = styled.a`
  font-weight: 600;
  font-size: 19px;
  line-height: 28px;
  color: #ff132e;
  margin-top: 24px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.rows ? "row" : "column")};
  align-items: ${props => (props.center ? "center" : "flex-start")};
  justify-content: ${props => (props.justifyCenter ? "center" : "flex-start")};
  margin-bottom: ${props => (props.bottom ? props.bottom : "16px")};
`

const Callout = styled(FlexContainer)`
  width: 840px;
  max-width: 100%;
`

const Col = styled.div`
  padding-right: 40px;

  &:last-of-type {
    padding-right: 0px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <FlexContainer rows center bottom="100px">
      <img src={suckedin} alt="something" width={400} />
      <FlexContainer>
        <h1>Mental Health</h1>
        <Text>
          To better understand your mental health, you need to ask yourself
          questions, often and on routine. We help you do that. Sensive uses
          psychological backed profiling techniques to help you gain insights to
          your mood over time and how to improve it.
        </Text>
        <a href="#">
          <img src={appstore} alt="Download on the App Store" height={50} />
        </a>
      </FlexContainer>
    </FlexContainer>

    <FlexContainer rows center bottom="100px">
      <FlexContainer justifyCenter>
        <h2>Built around you.</h2>
        <Text>
          Sensive is built around you. By having a daily check-in with yourself
          you’ll slowly learn more about yourself and discover ways to improve
          your mood and mental state of mind.{" "}
        </Text>
      </FlexContainer>
      <img src={ok} alt="OK" width={300} />
    </FlexContainer>

    <FlexContainer rows bottom="100px">
      <Col>
        <h3>POMS & TMDS</h3>
        <p>
          Using a pshycological technique called profile of mood states or POMS.
          With that we establish a daily score, total mood disturbance score or
          TMDS. This allows us to accuretly and precisley monitor your mood
          through self-reporting.{" "}
        </p>
        <RedLink>Learn More</RedLink>
      </Col>
      <Col>
        <h3>Daily Journaling</h3>
        <p>
          Through the use of daily journaling we help you establish a deeper
          check with yourself. A place for contemplating but yet breif top of
          mind free flowing text. This in combination with your TMDS becomes the
          baseline for your daily routine.
        </p>
        <RedLink>Learn More</RedLink>
      </Col>
      <Col>
        <h3>Atomic Habits</h3>
        <p>
          You can customize what habits you want to track during your daily
          routine. You can also at any point during the day track a habit, we
          suggest you start with simple easy to complete habits and build up to
          more complex habits.
        </p>
        <RedLink>Learn More</RedLink>
      </Col>
    </FlexContainer>

    <FlexContainer center>
      <Callout rows center>
        <Circle size={80} />
        <Text>
          Sensive is built around you. By having a daily check-in with yourself.
          This daily routine is a quiet breif moment each day when you touch
          base with your emotions and state of mind.
        </Text>
      </Callout>

      <img src={circles} alt="Circles" width={480} />
      <img src={suckedin} alt="Sucked In" width={300} />
    </FlexContainer>
  </Layout>
)

export default IndexPage
