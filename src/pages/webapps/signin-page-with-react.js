import React from "react"
import Projects from "../../components/project-page/projects"
import { reactSignInPage } from "../../components/project-page/projectDetails"
import SEO from "../../components/common/seo"

const ReactSignInPage = () => {
  return (
    <>
      <SEO title="Sign In" description="Sign In web application's page" />
      <Projects details={reactSignInPage} />
    </>
  )
}

export default ReactSignInPage
