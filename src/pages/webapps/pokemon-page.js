import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { pokemon } from "../../components/project-page/project-information"
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
