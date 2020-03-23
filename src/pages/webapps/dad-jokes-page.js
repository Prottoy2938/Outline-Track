import React from "react"
import Projects from "../../components/project-page/projects"
import SEO from "../../components/common/seo"
import { dadJokes } from "../../components/project-page/projectDetails"

const DadJokes = () => {
  return (
    <>
      <SEO title="Dad Jokes" description="Dad Joke web application's page" />
      <Projects details={dadJokes} />
    </>
  )
}

export default DadJokes
