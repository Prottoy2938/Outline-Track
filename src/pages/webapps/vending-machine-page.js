import React from "react"
import Projects from "../../components/project-page/projects"
import { vendingMachine } from "../../components/project-page/projectDetails"

const VendingMachine = props => {
  return <Projects details={vendingMachine} />
}

export default VendingMachine
