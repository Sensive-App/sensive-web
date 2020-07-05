import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import appstore from "../images/appstore-btn.png"
import ok from "../images/ok.png"
import suckedin from "../images/sucked-in.png"
import circles from "../images/circles.png"
import phoneFrame from "../images/iphone-x-frame-1.png"
import { Circle } from "../components/circle"

const Text = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`

const IngressText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  width: 700px;
  margin-bottom: 40px;
`

const PhoneFrame = styled.div`
  background-image: URL(${phoneFrame});
  min-width: 500px;
  min-height: 800px;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top:40px;
`

const CirclesImage = styled.img`
  margin-bottom: 80px;
  width: 480px;
`

const TextQuote = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-left: 24px;
`

const RedLink = styled.a`
  font-weight: 600;
  font-size: 19px;
  line-height: 28px;
  color: #ff132e;
  margin-top: 24px;
  display: inline-block;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;

  &:hover {
    border-bottom: 2px solid #ff132e;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.rows ? "row" : "column")};
  align-items: ${props => (props.center ? "center" : "flex-start")};
  justify-content: ${props => (props.justifyCenter ? "center" : "flex-start")};
  margin-bottom: ${props => (props.bottom ? props.bottom : "16px")};
  margin-top: ${props => (props.top ? props.top : "0px")};
  margin-left: ${props => (props.left ? props.left : "0px")};
`

const Callout = styled(FlexContainer)`
  width: 840px;
  max-width: 100%;
  margin-top: 160px;
  margin-bottom: 200px;
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

    <FlexContainer rows center bottom="0px">
      <PhoneFrame></PhoneFrame>
      <FlexContainer top="-72px" left="-40px">
        <h1>Mental Health</h1>
        <IngressText>
          To better understand your mental health, you need to ask yourself
          questions, often and on routine. We help you do that. Sensive uses
          psychological backed profiling techniques to help you gain insights to
          your mood over time and how to improve it.
        </IngressText>
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
          Using a pshycological technique called <i>profile of mood states</i> or <strong>POMS</strong>.
          With that we establish a daily score, <i>total mood disturbance score</i> or <strong>TMDS</strong>. This allows us to accuretly and precisley monitor your mood
          through self-reporting.{" "}
        </p>
        <RedLink>Learn More</RedLink>
      </Col>
      <Col>
        <h3>Daily Journaling</h3>
        <p>
          Through the use of daily journaling we help you establish a deeper
          check with yourself. A place for contemplating but yet breif top of
          mind free flowing text. This in combination with your <strong>TMDS</strong> becomes the
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
        <Circle size={100} />
        <TextQuote>
          Sensive is built around you. By having a daily check-in with yourself.
          This daily routine is a quiet breif moment each day when you touch
          base with your emotions and state of mind.
        </TextQuote>
      </Callout>

      <CirclesImage src={circles} alt="Circles" />
      <img src={suckedin} alt="Sucked In" width={300} />
    </FlexContainer>
  </Layout>
)

export default IndexPage
