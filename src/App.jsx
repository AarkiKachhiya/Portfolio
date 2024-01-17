import React from 'react'
import Header from './componenets/header/Header'
import Nav from './componenets/nav/Nav'
import About from './componenets/about/About'
import Experience from './componenets/experience/Experience'
import Services from './componenets/services/Services'
import Portfolio from './componenets/portfolio/Portfolio'
import Contact from './componenets/contact/Contact'
import Footer from './componenets/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App