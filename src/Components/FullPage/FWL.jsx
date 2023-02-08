import React from 'react'
import Footer from '../Footer/Footer'
import EDEX from '../EDEX/EDEX'
import Heading from '../Heading/Heading'
import Home from '../HomePage/Home'
import Projects from '../ProjectsComp/Projects'
const FWL = () => {
  return (
      <>
        <Home />
      <Heading head='Education & Experience' id="edex"/>
    <EDEX />
      <Heading head='Projects' id="projects" />
      <Projects />
      <Footer />
      </>
  )
}

export default FWL


