import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
)

const Button = styled.button`
  z-index: 100;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 15px;
  width: 50px;
  height: 50px;
`

export const MenuToggle = ({ toggle }) => (
  <Button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "Black" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "White" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "Black" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "White" },
        }}
      />
    </svg>
  </Button>
)
