import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { reactColorPicker } from "../../components/project-page/project-information"
import SEO from "../../components/common/seo"

const ReactColorPicker = () => {
  return (
    <>
      <SEO
        title="React Color Picker"
        description="React Color Picker web application's page"
      />
      <Projects details={reactColorPicker} />
    </>
  )
}

export default ReactColorPicker
