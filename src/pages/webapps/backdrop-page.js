import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { backDrop } from "../../components/project-page/project-information"
import SEO from "../../components/common/seo"

const BackDrop = () => {
  return (
    <>
      <SEO
        title="BackDrop"
        description="A web application to change/modify video background to anything."
      />

      <Projects details={backDrop} />
    </>
  )
}

export default BackDrop
