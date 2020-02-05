import React from "react"
import Projects from "../../components/projectPortfolio/projects"
import { dadJokes } from "../../components/projectPortfolio/projectDetails"

const DadJokes = props => {
  return <Projects details={dadJokes} />
}

export default DadJokes
