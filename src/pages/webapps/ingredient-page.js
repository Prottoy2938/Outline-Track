import React from "react"
import Projects from "../../components/project-page/project.container.js"
import SEO from "../../components/common/seo"
import { ingredient } from "../../components/project-page/project-information"

const Ingredient = () => {
  return (
    <>
      <SEO title="Ingredient" description="Ingredient web application's page" />
      <Projects details={ingredient} />
    </>
  )
}

export default Ingredient
