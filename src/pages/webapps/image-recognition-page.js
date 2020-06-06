import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { imageRecognition } from "../../components/project-page/project-information"
import SEO from "../../components/common/seo"

const ImageRecognition = () => {
  return (
    <>
      <SEO
        title="Image Recognition"
        description="Image Recognition Web Application's Page"
      />
      <Projects details={imageRecognition} />
    </>
  )
}

export default ImageRecognition
