import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { weatherApp } from "../../components/project-page/project-information"
import SEO from "../../components/common/seo"

const WeatherApp = () => {
  return (
    <>
      <SEO
        title="Weather App"
        description="Get weather data web application's page"
      />
      <Projects details={weatherApp} />
    </>
  )
}

export default WeatherApp
