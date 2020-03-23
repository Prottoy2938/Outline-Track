import React from "react"
import SEO from "../components/common/seo"
import HomepageTree from "../components/homepage/first-look.container"
import Portfolio from "../components/homepage/project-portfolio.container"
import MyDescription from "../components/homepage/my-description"
import AppbarLayout from "../components/common/appbarlayout"
import { ThemeProvider } from "../components/common/theme.context"
import "../styles/layout.css"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" description="A webapp to showcase my projects" />
      <div>
        <ThemeProvider>
          <AppbarLayout />
          <HomepageTree />
          <MyDescription />
          <Portfolio />
        </ThemeProvider>
      </div>
    </>
  )
}

export default IndexPage
