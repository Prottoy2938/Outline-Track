import React from "react"
import Projects from "../../components/project-page/projects"
import { pokemon } from "../../components/project-page/projectDetails"
import SEO from "../../components/common/seo"

const Pokemon = () => {
  return (
    <>
      <SEO
        title="Pokemon Strength"
        description="Pokemon Strength web application's page"
      />
      <Projects details={pokemon} />
    </>
  )
}

export default Pokemon
