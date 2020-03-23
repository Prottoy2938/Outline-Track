import React from "react"
import Projects from "../../components/project-page/projects"
import { yahtzee } from "../../components/project-page/projectDetails"
import SEO from "../../components/common/seo"

const Yahtzee = () => {
  return (
    <>
      <SEO title="Yahtzee" description="Yahtzee web application's page" />
      <Projects details={yahtzee} />
    </>
  )
}

export default Yahtzee
