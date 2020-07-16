import React from "react"
import Headboard from "../components/headboard/headboard"
import Layout from "../components/layout/layout"
import Intro from "../components/intro/intro"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    <SEO title="Home"/>
    <Headboard />
    <Intro />
  </Layout>
)

export default IndexPage
