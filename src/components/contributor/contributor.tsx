import React from "react"
import Img, { FixedObject, FluidObject } from "gatsby-image"
import { Box, Text, Flex, Link } from "rebass"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

import { Contributor as ContributorProps } from "../../pages/contributors"

interface DataQuery {
  twitterLogo: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
  githubLogo: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
  fallback: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const StyledImg = styled(Img)`
  border-radius: 100%;
  margin: 12px;
`

export const Contributor = (contributor: ContributorProps) => {
  const { company, github, image, name, twitter } = contributor
  const data: DataQuery = useStaticQuery(
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
        fallback: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const actualImage = image ? image : data.fallback

  return (
    <Box
      p={3}
      width={[1, 1, 1 / 4]}
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
      {actualImage && <StyledImg fluid={actualImage.childImageSharp.fluid} />}
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
      <Flex mt={2} justifyContent="center">
        {github && (
          <Link
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            p={1}
            sx={{
              ":hover": {
                opacity: 0.5,
              },
            }}
          >
            <Img
              fixed={data.githubLogo.childImageSharp.fixed}
              className="inverted-on-hover"
            />
          </Link>
        )}
        {twitter && (
          <Link
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            p={1}
            sx={{
              ":hover": {
                opacity: 0.5,
              },
            }}
          >
            <Img
              fixed={data.twitterLogo.childImageSharp.fixed}
              className="inverted-on-hover"
            />
          </Link>
        )}
      </Flex>
    </Box>
  )
}
