import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { taskManager } from "../../components/project-page/project-information"
import SEO from "../../components/common/seo"

const TodoListWithReact = () => {
  return (
    <>
      <SEO
        title="Task Manger"
        description="Task Manager web application's page"
      />
      <Projects details={taskManager} />
    </>
  )
}

export default TodoListWithReact
