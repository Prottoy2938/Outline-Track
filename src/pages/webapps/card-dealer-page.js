import React from "react"
import Projects from "../../components/project-page/projects"
import { cardDealer } from "../../components/project-page/projectDetails"
import SEO from "../../components/common/seo"

const CardDealder = () => {
  return (
    <>
      <SEO
        title="Card Dealer"
        description="card dealer web application's description page"
      />

      <Projects details={cardDealer} />
    </>
  )
}

export default CardDealder
