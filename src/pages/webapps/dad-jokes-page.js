import React from "react"
import Projects from "../../components/project-page/projects"
import { dadJokes } from "../../components/project-page/projectDetails"

const DadJokes = props => {
  return <Projects details={dadJokes} />
}

export default DadJokes
