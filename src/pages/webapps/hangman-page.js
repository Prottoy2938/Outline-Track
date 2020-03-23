import React from "react"
import Projects from "../../components/project-page/projects"
import { hangMan } from "../../components/project-page/projectDetails"
import SEO from "../../components/common/seo"

const Hangman = () => {
  return (
    <>
      <SEO title="Hangman" description="Hangman web application's page" />
      <Projects details={hangMan} />
    </>
  )
}

export default Hangman
