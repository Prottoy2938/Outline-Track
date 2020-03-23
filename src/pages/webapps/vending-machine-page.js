import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { vendingMachine } from "../../components/project-page/project-information"
import SEO from "../../components/common/seo"

const VendingMachine = () => {
  return (
    <>
      <SEO
        title="Vending Machine"
        description="Vending Machine web application's page"
      />
      <Projects details={vendingMachine} />
    </>
  )
}

export default VendingMachine
