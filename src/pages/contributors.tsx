import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Img, { FluidObject } from "gatsby-image"
import SEO from "../components/seo"
import { Contributor } from "../components/contributor"

export interface Contributor {
  image?: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  name: string
  company?: string
  github?: string
  twitter?: string
  position?: string
}

interface ContributorsQuery {
  allContributorsJson: {
    contributors: Contributor[]
  }
}

const ContributorsPage = () => {
  const {
    allContributorsJson: { contributors },
  }: ContributorsQuery = useStaticQuery(
    graphql`
      query {
        allContributorsJson {
          contributors: nodes {
            image {
              childImageSharp {
                fluid(maxWidth: 256) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            company
            github
            twitter
            position
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Contributors</h1>
      <p>Thanks so much to these amazing people: </p>
      <div>
        {contributors.map(contributor => (
          <Contributor {...contributor} key={contributor.name} />
        ))}
      </div>
    </Layout>
  )
}

export default ContributorsPage
