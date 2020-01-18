import React from "react"
import SEO from "../components/seo"
import HomepageTree from "../components/homepage/homepagetree"
import Portfolio from "../components/homepage/portfolio"
import VideoPlayer from "../components/features/music"
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
        <Portfolio />
        <VideoPlayer />
        <BottomSide />
      </ThemeProvider>
    </div>
  )
}

export default IndexPage
