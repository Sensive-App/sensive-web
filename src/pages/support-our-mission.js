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

const Line = styled.div`
  height: 1px;
  background: #ccc;
  margin: 32px 0;
`

const Button = styled.a`
  height: 40px;
  background: #000;
  color: #fff;
  border-radius: 4px;
  padding: 0 16px;
  font-weight: 600;
  line-height: 40px;
  display: inline-block;
  margin-top: 16px;
  margin-right: 24px;
  width: 168px;
  text-align: center;

  &:last-of-type {
    margin-right: 8px;
  }
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
    <Line />
    <h3>Annual Contribution</h3>
    <Button>$50/year</Button>
    <Button>$100/year</Button>
    <Button>$200/year</Button>
    <Button>$500/year</Button>
    <Line />
    <h3>Monthly Contribution</h3>
    <Button>$5/month</Button>
    <Button>$10/month</Button>
    <Button>$20/month</Button>
    <Button>$50/month</Button>
    <p>
      If you have any questions, please email us at member@sensive.xyz Want to
      contribute without becoming a member? Make a one-time donation.
    </p>
    <h2>Membership Perks</h2>
    <ul>
      <li>
        Future members-only experiences and perks, including video chats with
        our co-founders, mental coaches, cognitive theraphist and thought
        leaders.
      </li>
      <li>A $100 credit toward future app subscriptions*</li>
      <li>Early access to new sensive tracking tools</li>
      <li>Recognition in the sensive app and our utmost gratitude</li>
    </ul>
    <p>And much more to come...</p>
    <h2>FAQ</h2>
    <h4>Can I donate to support Sensive without becoming a member?</h4>
    <p>
      Yes! We welcome donations of any size. You can submit a one-time donation
      online.
    </p>
    <h4>How do I cancel my membership?</h4>
    <p>
      At the moment, please email us at members@sensive.xyz to cancel your
      membership. Unfortunately we can offer neither full nor prorated refunds
      once you have been charged.
    </p>
    <h4>
      How do I change the billing information associated with my membership?
    </h4>
    <p>
      Memberships automatically renew monthly or annually. If you need to update
      your billing information, or your membership is up for renewal soon,
      please email us at members@sensive.xzy.
    </p>
    <h4>Is Sensive still accessible to non-members?</h4>
    <p>Yes! Our iOS App and content will remain accessible to everyone.</p>
    <h4>How do I redeem my $100 app credit?</h4>
    <p>
      In your account settings there is a credit counter indicating how to use
      the credits in app.
    </p>
    <h4>I have another question.</h4>
    <p>
      No problem, just email us at members@sensive.xyz. We’d love to hear from
      you.{" "}
    </p>
    <Line />
  </Layout>
)

export default SupportOurMissionPage
