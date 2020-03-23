import React from "react"
import Projects from "../../components/project-page/projects"
import { weatherApp } from "../../components/project-page/projectDetails"
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
