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

  @media (max-width: 480px) {
    font-size: 22px;
    line-height: 28px;
  }
`

const IngressText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  width: 700px;
  max-width: 100%;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    width: 100%;
    font-size: 22px;
    line-height: 28px;
  }
`

const PhoneFrame = styled.div`
  background-image: URL(${phoneFrame});
  min-width: 500px;
  min-height: 800px;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 40px;

  @media (max-width: 480px) {
    display: none;
  }
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

  @media (max-width: 480px) {
    margin-left: 0px;
    margin-top: 40px;
  }
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

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const Callout = styled(FlexContainer)`
  width: 840px;
  max-width: 100%;
  margin-top: 160px;
  margin-bottom: 200px;

  @media (max-width: 480px) {
    margin-top: 80px;
    margin-bottom: 100px;
  }
`

const Hero = styled(FlexContainer)`
  margin-top: -72px;
  margin-left: -40px;

  h1 {
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 100px;

    a {
      margin-top: 24px;
      align-self: center;
    }
  }
`

const Col = styled.div`
  flex: 1;
  padding-right: 40px;

  @media (max-width: 480px) {
    padding-right: 0px;
    padding-bottom: 40px;
  }

  &:last-of-type {
    padding-right: 0px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <FlexContainer rows center bottom="0px">
      <PhoneFrame></PhoneFrame>
      <Hero>
        <h1>Tracking your mental wellbeing</h1>
        <IngressText>
          {/* Mental health is a fundamental part of our overall wellbeing.  */}
          To better understand your mental health, you need to ask yourself
          questions, often and on routine. This is where we come in. Sensive
          uses psychological backed profiling techniques to help you gain
          insights to your mood over time and how to improve it.
        </IngressText>
        <Link to="/beta">
          <img src={appstore} alt="Download on the App Store" height={50} />
        </Link>
      </Hero>
    </FlexContainer>

    <FlexContainer rows center bottom="100px">
      <FlexContainer justifyCenter>
        <h2>Built around you.</h2>
        <Text>
          Sensive is tailored to you. By having a daily check-in you’ll begin to
          learn more about yourself, building up an overview of your mood and
          learning how they impact your mental state along with ways to improve
          your mood and mental state of mind.{" "}
        </Text>
      </FlexContainer>
      <img src={ok} alt="OK" width={300} />
    </FlexContainer>

    <FlexContainer rows bottom="100px">
      <Col>
        <h3>POMS &amp; TMDS</h3>
        {/* <h4>A psychological profile</h4> */}

        <p>
          Sensive uses a psychological technique called profile of mood states{" "}
          <strong>(POMS)</strong> to establish your own personal profile. By
          simply tracking your mood states throughout the day, Sensive can
          establish a daily score called your total mood disturbance score or{" "}
          <strong> TMDS</strong> . This helps monitor your mood – which is the
          basis for positive changes.
        </p>
        {/* <RedLink>Learn More</RedLink> */}
      </Col>
      <Col>
        <h3>Daily Journaling</h3>
        {/* <h4>Writing for yourself</h4> */}
        <p>
          By just recording free flowing thoughts, emotions and reflections
          throughout your day in the Sensive app, it gives you the place to
          establish a deeper check in with yourself. Sensive takes this
          information in combination with your TMDS, to create the baseline for
          your day-to-day life.
        </p>
        {/* <RedLink>Learn More</RedLink> */}
      </Col>
      <Col>
        <h3>Atomic Habits</h3>
        {/* <h4>Daily actions towards positive routines </h4> */}
        <p>
          Everyday actions can alter our mood and emotions in any direction. To
          harness the positive power of these in your day, Sensive enables you
          to track a variety of daily actions or habits so that you can build
          them into a positive routine. (Coming soon)
        </p>
        {/* <RedLink>Learn More</RedLink> */}
      </Col>
    </FlexContainer>

    <FlexContainer center>
      <Callout rows center>
        <Circle size={100} />
        <TextQuote>
          Sensive is built around you. Our daily routine is a brief moment of
          quiet each day to give you time to touch base with your emotions and
          state of mind.
        </TextQuote>
      </Callout>

      <CirclesImage src={circles} alt="Circles" />
      <img src={suckedin} alt="Sucked In" width={300} />
    </FlexContainer>
  </Layout>
)

export default IndexPage
