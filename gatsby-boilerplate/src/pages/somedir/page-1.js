import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page One in Some Dir" />
    <h1>Hi From a page in another dir</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
