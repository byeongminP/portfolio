import React from "react"
import Headboard from "../components/headboard/headboard"
import Layout from "../components/layout/layout"
import Intro from "../components/intro/intro"
import Cs194 from "../components/cs194/cs194"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    <SEO title="Home"/>
    <Headboard />
    <Intro />
    <Cs194 />
  </Layout>
)

export default IndexPage
