import React from "react"
import Projects from "../components/projectPortfolio/projects"
import { simpleTodoApp_withReactHooks } from "../components/projectPortfolio/projectDetails"

const SimpleTodoApp_withReact = props => {
  return <Projects details={simpleTodoApp_withReactHooks} />
}

export default SimpleTodoApp_withReact
