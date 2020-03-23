import React from "react"
import SEO from "../components/common/seo"
import HomepageTree from "../components/homepage/homepagetree"
import Portfolio from "../components/homepage/portfolio"
import MyDescription from "../components/homepage/myDescription"
import AppbarLayout from "../components/appbar/appbarlayout"
import { ThemeProvider } from "../components/contexts/themeContext"

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
