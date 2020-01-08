import React from "react"
import Projects from "../components/projectPortfolio/projects"
import { taskManager } from "../components/projectPortfolio/projectDetails"

const TodoListWithReact = props => {
  return <Projects details={taskManager} />
}

export default TodoListWithReact
