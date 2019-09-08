import React from "react"
import Img from "gatsby-image"
import { Box, Text } from "rebass"
import { graphql, useStaticQuery } from "gatsby"

import { Contributor as ContributorProps } from "../../pages/contributors"

export const Contributor = (contributor: ContributorProps) => {
  const { company, github, image, name, twitter, position } = contributor
  const data = useStaticQuery(
    graphql`
      query {
        twitterLogo: file(relativePath: { eq: "twitter-logo.png" }) {
          childImageSharp {
            fixed(height: 28) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        githubLogo: file(relativePath: { eq: "github-logo.png" }) {
          childImageSharp {
            fixed(height: 28) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  console.log(data)
  return (
    <Box
      p={3}
      width={[1, 1, 1 / 2]}
      m={3}
      sx={{
        "text-align": "center",
        ":hover": {
          backgroundColor: "pink",
          ".inverted-on-hover": {
            filter: "invert(100%)",
          },
        },
      }}
    >
      {image && <Img fluid={image.childImageSharp.fluid}></Img>}
      <Text fontSize={[3, 4, 5]} className="inverted-on-hover">
        {name}
      </Text>
      <Text fontSize={3} color="yellow">
        {company}
      </Text>
      <a
        href={`https://github.com/${github}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fixed={data.githubLogo.childImageSharp.fixed}
          className="inverted-on-hover"
        />
      </a>
      <a
        href={`https://twitter.com/${twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fixed={data.twitterLogo.childImageSharp.fixed}
          className="inverted-on-hover"
        />
      </a>
    </Box>
  )
}
