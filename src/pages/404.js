import React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default NotFoundPage
