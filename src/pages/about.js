import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/infoblock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import staffPic from "../images/contentFul/django.png"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title = "About Learn Code Online"
    subtitle = ""
    heroClass = "about-background"
    />
    <DualInfoBlock 
    heading = "Message From CEO"
    staff = {staffPic}
    />
    <Infoblock heading="About Vision"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
  }
}
`

export default AboutPage
