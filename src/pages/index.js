import React from "react"
import SEO from "../components/common/seo"
import HomepageTree from "../components/homepage/first-look.container"
import Portfolio from "../components/homepage/project-portfolio.container"
import MyDescription from "../components/homepage/my-description"
import AppbarLayout from "../components/common/appbarlayout"
import { ThemeProvider } from "../components/common/theme.context"
import "../styles/layout.css"
import Cluster11Project from "../components/homepage/cluster-11-project"

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Outline | Prottay Rudra"
        description="A web application to keep track of my projects"
      />
      <div>
        <ThemeProvider>
          <AppbarLayout />
          <HomepageTree />
          <MyDescription />
          <Portfolio />
          <Cluster11Project />
        </ThemeProvider>
      </div>
    </>
  )
}

export default IndexPage
