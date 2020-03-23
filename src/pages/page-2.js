import React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/layout"
import SEO from "../components/common/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

//IMPORTANT, DON'T DELETE THIS PAGE. THIS PAGE IS SOMEHOW RELATED TO THE GLOBAL BODY STYLE AND DELETING THIS WILL BREAK THIS WEBAPP'S STYLE. IT TOOK ME A WHILE TO GET THIS.
