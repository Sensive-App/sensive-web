import React from "react"
import styled from "styled-components"
import { Circle } from "./circle"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"

const StyledFooter = styled.footer`
  border-top: 1px solid #ccc;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
`

const Text = styled.p`
  color: #b6b6b6;
  margin-bottom: 80px;
  margin-top: 24px;
  font-size: 12px;
  letter-spacing: -0.4px;
`

const Icon = styled.img`
  height: 44px;
  width: 44px;
  margin: 0 8px;
`

const SoMe = styled.div``

export const Footer = () => (
  <StyledFooter>
    <Circle />
    <Text>When you are looking for something, you'll find nothing.</Text>
    <SoMe>
      <a href="https://www.instagram.com/sensive.xyz/">
        <Icon src={instagram} alt="instagram" />
      </a>
      <a href="https://www.instagram.com/sensive.xyz/">
        <Icon src={twitter} alt="twitter" />
      </a>
      <a href="https://www.instagram.com/sensive.xyz/">
        <Icon src={linkedin} alt="linkedin" />
      </a>
    </SoMe>
  </StyledFooter>
)
