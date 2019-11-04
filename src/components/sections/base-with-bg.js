import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const SectionBaseWithBg = ({ children, className, backgroundImage }) => {
  const images = useStaticQuery(
    graphql`
      query {
        splashFront: file(relativePath: { eq: "splash-front.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 3360) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const image = images[backgroundImage]
  console.log(image)
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={image.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledSectionBaseWithBg = styled(SectionBaseWithBg)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledSectionBaseWithBg
