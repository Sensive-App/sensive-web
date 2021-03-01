import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  width: 840px;
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

const BlueLink = styled.p`
  font-size: 16px;
  line-height: 16px;
`

const PrivacyPage = () => (
  <Layout>
    <SEO title="Sensive Privacy Policy" />
    <Wrapper>
      <h1>Privacy Policy</h1>
      <br />
      <SmallText>
        <strong>
          Sensive Pty Ltd built the Sensive app as a Commercial app. This
          service is provided by Sensive Pty Ltd and is intended for use as is.
        </strong>
      </SmallText>
      <br />
      <SmallText>
        This page is used to inform visitors regarding our policies with the
        collection, use, and disclosure of Personal Information if anyone
        decided to use our Service.
      </SmallText>
      <SmallText>
        If you choose to use our Service, then you agree to the collection and
        use of information in relation to this policy. The Personal Information
        that we collect is used for providing and improving the Service. We will
        not use or share your information with anyone except as described in
        this Privacy Policy.
      </SmallText>
      <SmallText>
        The terms used in this Privacy Policy have the same meanings as in our
        Terms and Conditions, which is accessible at Sensive unless otherwise
        defined in this Privacy Policy.
      </SmallText>
      <Text>Information Collection and Use</Text>
      <SmallText>
        For a better experience, while using our Service, we may require you to
        provide us with certain personally identifiable information, including
        but not limited to Name, Email, Phone Number, Daily Journal entries and
        mood tracking sessions.. The information that we request will be
        retained by us and used as described in this privacy policy.
      </SmallText>
      <div>
        <SmallText>
          The app does use third party services that may collect information
          used to identify you.
        </SmallText>
        <SmallText>
          Link to privacy policy of third party service providers used by the
          app
        </SmallText>

        <br />
        <BlueLink>
          <Link to="https://firebase.google.com/policies/analytics">
            Google Analytics for Firebase
          </Link>
        </BlueLink>

        <br />
        <BlueLink>
          <Link to="https://firebase.google.com/support/privacy/">
            Firebase Crashlytics
          </Link>
        </BlueLink>
      </div>
      <Text>Log Data</Text>
      <SmallText>
        We want to inform you that whenever you use our Service, in a case of an
        error in the app we collect data and information (through third party
        products) on your phone called Log Data. This Log Data may include
        information such as your device Internet Protocol (“IP”) address, device
        name, operating system version, the configuration of the app when
        utilizing our Service, the time and date of your use of the Service, and
        other statistics.
      </SmallText>
      <Text>Cookies</Text>
      <SmallText>
        Cookies are files with a small amount of data that are commonly used as
        anonymous unique identifiers. These are sent to your browser from the
        websites that you visit and are stored on your device's internal memory.
      </SmallText>
      <SmallText>
        This Service does not use these “cookies” explicitly. However, the app
        may use third party code and libraries that use “cookies” to collect
        information and improve their services. You have the option to either
        accept or refuse these cookies and know when a cookie is being sent to
        your device. If you choose to refuse our cookies, you may not be able to
        use some portions of this Service.
      </SmallText>
      <Text>Service Providers</Text>
      <SmallText>
        We may employ third-party companies and individuals due to the following
        reasons:
      </SmallText>
      <ul>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
      </ul>
      <SmallText>
        We want to inform users of this Service that these third parties have
        access to your Personal Information. The reason is to perform the tasks
        assigned to them on our behalf. However, they are obligated not to
        disclose or use the information for any other purpose.
      </SmallText>
      <Text>Security</Text>
      <SmallText>
        We value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee
        its absolute security.
      </SmallText>
      <Text>Links to Other Sites</Text>
      <SmallText>
        This Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by us. Therefore, we strongly advise you
        to review the Privacy Policy of these websites. We have no control over
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </SmallText>
      <Text>Children’s Privacy</Text>
      <SmallText>
        These Services do not address anyone under the age of 13. We do not
        knowingly collect personally identifiable information from children
        under 13 years of age. In the case we discover that a child under 13 has
        provided us with personal information, we immediately delete this from
        our servers. If you are a parent or guardian and you are aware that your
        child has provided us with personal information, please contact us so
        that we will be able to do necessary actions.
      </SmallText>
      <Text>Changes to This Privacy Policy</Text>
      <SmallText>
        We may update our Privacy Policy from time to time. Thus, you are
        advised to review this page periodically for any changes. We will notify
        you of any changes by posting the new Privacy Policy on this page. This
        policy is effective as of 2021-03-01
      </SmallText>
      <Text>Contact Us</Text>
      <SmallText>
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us at hello+privacy@sensive.xyz
      </SmallText>
    </Wrapper>
  </Layout>
)

export default PrivacyPage
