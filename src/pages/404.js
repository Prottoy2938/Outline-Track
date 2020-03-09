import React from "react"
import SEO from "../components/common/seo"
import "../components/styles/404.css"
import logoImg from "../images/gatsby-icon.png"
const NotFoundPage = () => {
  console.log("Favicon from icons8")
  return (
    <>
      <SEO title="404: Not found" />
      <div className="container">
        <h1 className="title">Page Not Found</h1>
        <p className="description">
          The page that this url has requested is not available
        </p>
        <h2 className="homepage">
          You might wanna go to the{" "}
          <span>
            <a href="https://prottoy2938.github.io/" className="homepage-text">
              Home Page
            </a>
          </span>
        </h2>
        <a href="https://prottoy2938.github.io/" className="logo-container">
          <img src={logoImg} alt="go to the homepage" className="logo" />
        </a>
      </div>
    </>
  )
}

export default NotFoundPage
