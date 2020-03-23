import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { nayump } from "../../components/project-page/projectDetails"
import SEO from "../../components/common/seo"

const Nayump = () => {
  return (
    <>
      <SEO
        title="Nayump"
        description="Nayump is a web application which runs video on scroll. This is its description page"
      />
      <Projects details={nayump} />
    </>
  )
}

export default Nayump
