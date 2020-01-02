import React from "react"
import HomepageTree from "../components/homepage/homepagetree"
import Portfolio from "../components/portfolio/portfolio"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <HomepageTree />
    <Portfolio />
  </div>
)

export default IndexPage
