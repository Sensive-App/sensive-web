import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import astro from "../images/gatsby-astronaut.png"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <img src={astro} alt="astronauten" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
