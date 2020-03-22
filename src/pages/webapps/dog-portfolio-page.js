import React from "react"
import Projects from "../../components/project-page/projects"
import { dogPortfolio } from "../../components/project-page/projectDetails"

const DogPortfolio = props => {
  return <Projects details={dogPortfolio} />
}

export default DogPortfolio
