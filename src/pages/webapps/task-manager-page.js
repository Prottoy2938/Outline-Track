import React from "react"
import Projects from "../../components/project-page/projects"
import { taskManager } from "../../components/project-page/projectDetails"
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
