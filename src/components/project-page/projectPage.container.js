import React from "react"
import ImageSlider from "./imageSlider"
import ProjectFeatures from "./projectFeatures"
import { ThemeProvider } from "../contexts/themeContext"
import PropTypes from "prop-types"

const Projects = ({ details }) => {
  const { title, github, page, description, img, facts } = details
  return (
    <ThemeProvider>
      <h1 className="project-title">{title}</h1>
      <ImageSlider images={img} />
      <ProjectFeatures
        title={title}
        github={github}
        page={page}
        description={description}
        facts={facts}
      />
    </ThemeProvider>
  )
}

Projects.propTypes = {
  details: PropTypes.object,
}

export default Projects
