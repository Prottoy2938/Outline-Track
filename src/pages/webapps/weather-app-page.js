import React from "react"
import Projects from "../../components/project-page/projects"
import { weatherApp } from "../../components/project-page/projectDetails"

const WeatherApp = props => {
  return <Projects details={weatherApp} />
}

export default WeatherApp
