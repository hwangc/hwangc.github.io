import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Intro from "../components/intro"
import Expertise from "../components/expertise"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Education from "../components/education"
import Awards from "../components/awards"
import Portfolio from "../components/portfolio"
import Footer from "../components/footer"
import Loader from "../components/loader"

const IndexPage = (): JSX.Element => (
  <>
    <Loader />
    <Layout>
      <SEO title="Home" />
      <Header />
      <Intro />
      <Expertise />
      <Skills />
      <Experience />
      <Education />
      <Awards />
      <Portfolio />
      <Footer />
    </Layout>
  </>
)

export default IndexPage
  