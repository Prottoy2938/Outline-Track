import React from "react"
import Projects from "../../components/project-page/projects"
import SEO from "../../components/common/seo"
import { ingredient } from "../../components/project-page/projectDetails"

const Ingredient = () => {
  return (
    <>
      <SEO title="Ingredient" description="Ingredient web application's page" />
      <Projects details={ingredient} />
    </>
  )
}

export default Ingredient
