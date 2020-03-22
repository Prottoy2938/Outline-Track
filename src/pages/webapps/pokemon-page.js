import React from "react"
import Projects from "../../components/project-page/projects"
import { pokemon } from "../../components/project-page/projectDetails"

const Pokemon = props => {
  return <Projects details={pokemon} />
}

export default Pokemon
