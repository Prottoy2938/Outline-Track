import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { dogPortfolio } from "../../components/project-page/projectDetails"
import SEO from "../../components/common/seo"

const DogPortfolio = () => {
  return (
    <>
      <SEO
        title="Dog's Portfolio"
        description="dog portfolio web application's page"
      />
      <Projects details={dogPortfolio} />
    </>
  )
}

export default DogPortfolio
