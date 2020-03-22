import React from "react"
import Projects from "../../components/project-page/projects"
import { hangMan } from "../../components/project-page/projectDetails"

const Hangman = props => {
  return <Projects details={hangMan} />
}

export default Hangman
