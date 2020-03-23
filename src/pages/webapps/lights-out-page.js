import React from "react"
import Projects from "../../components/project-page/projects"
import { lightsOut } from "../../components/project-page/projectDetails"
import SEO from "../../components/common/seo"

const LightsOut = () => {
  return (
    <>
      <SEO title="Lights Out" description="Lights out web application's page" />
      <Projects details={lightsOut} />
    </>
  )
}

export default LightsOut
