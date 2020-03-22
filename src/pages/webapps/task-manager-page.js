import React from "react"
import Projects from "../../components/project-page/projects"
import { taskManager } from "../../components/project-page/projectDetails"

const TodoListWithReact = props => {
  return <Projects details={taskManager} />
}

export default TodoListWithReact
