import React from "react"
import Projects from "../../components/projectPortfolio/projects"
import { hangMan } from "../../components/projectPortfolio/projectDetails"

const Hangman = props => {
  return <Projects details={hangMan} />
}

export default Hangman
