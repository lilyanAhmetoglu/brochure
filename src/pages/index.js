import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Brochure from "../components/brochure"


const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <Brochure/>

    

  </Layout>
)

export default IndexPage
