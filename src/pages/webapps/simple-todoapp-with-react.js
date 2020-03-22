import React from "react"
import Projects from "../../components/project-page/projects"
import { simpleTodoApp_withReactHooks } from "../../components/project-page/projectDetails"

const SimpleTodoApp_withReact = props => {
  return <Projects details={simpleTodoApp_withReactHooks} />
}

export default SimpleTodoApp_withReact
