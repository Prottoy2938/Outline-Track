import React from "react"
import SEO from "../components/common/seo"
import HomepageTree from "../components/homepage/homepagetree"
import Portfolio from "../components/homepage/portfolio"
import MyDescription from "../components/homepage/myDescription"
import BottomSide from "../components/homepage/bottomSide"
import AppbarLayout from "../components/appbar/appbarlayout"
import { ThemeProvider } from "../components/contexts/themeContext"

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <ThemeProvider>
        <AppbarLayout />
        <HomepageTree />
        <MyDescription />
        <Portfolio />
        {/* <BottomSide /> delete bottomSide.js component */}
      </ThemeProvider>
    </div>
  )
}

export default IndexPage
