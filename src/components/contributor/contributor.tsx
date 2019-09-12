import React from "react"
import Img from "gatsby-image"
import { Box, Text, Flex } from "rebass"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

import { Contributor as ContributorProps } from "../../pages/contributors"

const StyledImg = styled(Img)`
  border-radius: 100%;
`

export const Contributor = (contributor: ContributorProps) => {
  const { company, github, image, name, twitter } = contributor
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
      width={[1, 1, 1 / 4]}
      m={3}
      sx={{
        "text-align": "center",
        ":hover": {
          backgroundColor: "secondary",
          ".inverted-on-hover": {
            filter: "invert(100%)",
          },
        },
      }}
    >
      {image && <StyledImg fluid={image.childImageSharp.fluid} />}
      <Text
        fontSize={[3, 4]}
        className="inverted-on-hover"
        fontWeight="bold"
        fontFamily="body"
        mt={2}
      >
        {name}
      </Text>
      <Text fontSize={[2, 3]} color="tertiary" fontFamily="body">
        {company}
      </Text>
      <Flex mt={3} justifyContent="center">
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
      </Flex>
    </Box>
  )
}
