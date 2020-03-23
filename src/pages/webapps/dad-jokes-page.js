import React from "react"
import Projects from "../../components/project-page/project.container.js"
import SEO from "../../components/common/seo"
import { dadJokes } from "../../components/project-page/project-information"

const DadJokes = () => {
  return (
    <>
      <SEO title="Dad Jokes" description="Dad Joke web application's page" />
      <Projects details={dadJokes} />
    </>
  )
}

export default DadJokes
