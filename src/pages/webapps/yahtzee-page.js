import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { yahtzee } from "../../components/project-page/project-information"
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
