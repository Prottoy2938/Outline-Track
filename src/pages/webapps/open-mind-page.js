import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { openMind } from "../../components/project-page/project-information"
import SEO from "../../components/common/seo"

const BackDrop = () => {
  return (
    <>
      <SEO
        title="Open Mind"
        description="A web application that you can use to train an AI and make it recognize your images"
      />

      <Projects details={openMind} />
    </>
  )
}

export default BackDrop
