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

const ItalicText = styled.p`
  font-style: italic;
  font-size: 16px;
  line-height: 26px;
  font-family: Georgia;
  color: #333;
`

const Img = styled.img`
  width: 300px;
  display: block;
  margin: 0 auto;
`

const Line = styled.div`
  height: 1px;
  background: #ccc;
  margin: 32px 0;
`

const Wrapper = styled.div`
  width: 770px;
  max-width: 100%;
`
const List = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
`

const Text40 = styled.p`
  margin-top: 40px;
  margin-bottom: 40px;
  font-family: Georgia;
  color: #333;
`

const TextIngress = styled.p`
  font-weight: 500;
  font-size: 19px;
  line-height: 26px;
  margin-top: 40px;
  margin-bottom: 80px;
  font-family: Georgia;
  color: #333;
`

const TextResponse = styled.p`
  margin-top: 8px;
  margin-bottom: 32px;
  font-family: Georgia;
  color: #333;
`

const ListLi = styled.li`
  margin-top: 16px;
  font-family: Georgia;
  color: #333;
  font-size: 19px;
`

const Button = styled.a`
  height: 50px;
  background: #000;
  color: #fff;
  border-radius: 4px;
  padding: 0 16px;
  font-weight: 600;
  line-height: 50px;
  display: inline-block;
  margin-top: 16px;
  margin-right: 16px;
  width: 164px;
  text-align: center;

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0px;
  }

  &:last-of-type {
    margin-right: 0px;
  }

  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: PaleGreen;
    color: #000000;
  }
`
const RedLink = styled.a`
  font-weight: 600;
  color: #000;
  border-bottom: 2px solid #000;
  padding-bottom: 2px;

  &:hover {
    border-bottom: 2px solid transparent;
    background-color: PaleGreen;
  }
`

const SupportOurMissionPage = () => (
  <Layout>
    <Wrapper>
      <SEO title="Support Our Mission" />
      <Img src={workhard} alt="Work Hard" />
      <h1>Support Our Mission</h1>
      <Text40>
        Sensives mission has always been to inspire thoughtfulness and curiosity
        about the incredible minds we all share. In these uncertain times, it’s
        more important than ever that we have a place to keep that sense of awe
        alive. Our new membership program aims to help strentgthen our ability
        to stay independant and continue to develop our app and unite our
        community so that Sensive can continue to thrive.
        <br />
        <br />
        By becoming a founding member, you’re joining a community of like-minded
        mind lovers who believe deeply in Sensives mission. Your direct support
        allows our small team to help improve mental heath, develop and build
        great software, and continue building out our knowledge about
        pshycological health. Oh, and you’ll get some pretty great perks, too.
      </Text40>

      <h2>Become a Member </h2>
      <Text>
        Support Sensive and its development with a contribution of at least $5
        per month or $500 per year. We want to stay independant and your contribution helps us do that. 
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
      <TextIngress>
        If you have any questions, please email us at{" "}
        <RedLink href="mailto:member@sensive.xyz">member@sensive.xyz</RedLink> Want to
        contribute without becoming a member?{" "}
        <RedLink href="#">Make a one-time donation</RedLink>.
      </TextIngress>
      <List>
        <h2>Membership Perks</h2>
        <ul>
          <ListLi>
            <strong>Future members-only experiences and perks</strong>,
            including video chats with our co-founders, mental coaches,
            cognitive theraphist and thought leaders.
          </ListLi>
          <ListLi>
            A <strong>$100 credit</strong> toward future app subscriptions*
          </ListLi>
          <ListLi>Early access to new sensive tracking tools</ListLi>
          <ListLi>
            Recognition in the sensive app and our utmost gratitude
          </ListLi>
        </ul>
        <TextResponse>And much more to come...</TextResponse>
      </List>
      <h2>FAQ</h2>
      <h4>Can I donate to support Sensive without becoming a member?</h4>
      <TextResponse>
        Yes! We welcome donations of any size. You can submit a one-time
        donation online.
      </TextResponse>
      <h4>How do I cancel my membership?</h4>
      <TextResponse>
        At the moment, please email us at <RedLink href="mailto:member@sensive.xyz">member@sensive.xyz</RedLink> to cancel your
        membership. Unfortunately we can offer neither full nor prorated refunds
        once you have been charged.
      </TextResponse>
      <h4>
        How do I change the billing information associated with my membership?
      </h4>
      <TextResponse>
        Memberships automatically renew monthly or annually. If you need to
        update your billing information, or your membership is up for renewal
        soon, please email us at members@sensive.xzy.
      </TextResponse>
      <h4>Is Sensive still accessible to non-members?</h4>
      <TextResponse>
        Yes! Our iOS App and content will remain accessible to everyone.
      </TextResponse>
      <h4>How do I redeem my $100 app credit?</h4>
      <TextResponse>
        In your account settings there is a credit counter indicating how to use
        the credits in app.
      </TextResponse>
      <h4>I have another question.</h4>
      <TextResponse>
        No problem, just email us at <RedLink href="mailto:member@sensive.xyz">member@sensive.xyz</RedLink>. We’d love to hear from
        you.
      </TextResponse>
      <Line />
      <ItalicText>
        Your support of Sensive does not constitute a charitable donation, and
        your contribution is not eligible for a tax deduction. Our membership
        program is designed to connect our community and sustain Sensives
        mission to inspire a greater understanding in mental health.
        <br />
        <br />
        Members will be subscribed to a members-only mailing list. This is to
        let you know when member events are happening, how to access new
        features before anyone else, and other announcements related to being a
        member. You’ll also receive emails from our payment processor Stripe
        regarding your payment, including invoices and renewal notices. Your
        email address and personal information will never be given to anyone for
        any purpose.
      </ItalicText>
    </Wrapper>
  </Layout>
)

export default SupportOurMissionPage
