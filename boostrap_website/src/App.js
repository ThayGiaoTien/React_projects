import React from 'react'
import Header_Navbar from './components/Header_Navbar'
import ShowCase from './components/ShowCase'
import Newsletter from './components/Newsletter'
import Boxes from './components/Boxes/Boxes'
import LearnSection from './components/LearnSection'
import AccordionQuestions from './components/Questions/AccordionQuestions'
import Instructors from './components/Instructors/Instructors'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'
import Modal from './components/Modal'
const App = () => {
  return (
    <div>
      <Header_Navbar />
      <ShowCase />
      <Newsletter />
      <Boxes />
      <LearnSection />
      <AccordionQuestions />
      <Instructors/>
      <ContactInfo />
      <Footer />
      <Modal/>
    </div>
  )
}

export default App
