import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hola Reacter !</h1>
    <p>Bienvenido a React Canarias.</p>
    <p>
      📢 Únete a nuestro{" "}
      <a href="https://reactjs.eu/slack" target="blank">
        Slack
      </a>
      .
    </p>

    <p>
      💪 A nuestro{" "}
      <a href="https://reactjs.eu/meetup" target="blank">
        Meetup
      </a>
      .
    </p>
    <p>
      💻 Y nuestro{" "}
      <a href="https://reactjs.eu/github" target="blank">
        Github
      </a>
      .
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Test page 2</Link>
  </Layout>
)

export default IndexPage
