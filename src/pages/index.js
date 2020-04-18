import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/infoblock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import staffPic from "../images/Srikanth.jpg"
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title = "I Write Code"
    subtitle = "LearnCodeOnline.in"
    heroClass = "hero-background"
    />
    <Infoblock heading="About Us"/>
    <Coursecart courses={data.course}/>
    <DualInfoBlock 
    heading = "Our Team"
    staff = {staffPic}
    />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
  }
  course :allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description {
          description
        }
        image {
          fixed(width:200,height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
