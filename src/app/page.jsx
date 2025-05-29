import React from 'react'
import Hero from './components/Hero'
import Brands from './components/Brands'
import AboutUs from './components/AboutUs'
import WhyChooseUs from './components/WhyChooseUs'
import OurServices from './components/OurServices'
import OurWork from './components/OurWork'
import HowWeWork from './components/HowWeWork'
import FewWords from './components/FewWords'

const page = () => {
  return (
    <>
      <Hero />
      <Brands />
      <AboutUs />
      <WhyChooseUs />
      <OurServices />
      <OurWork />
      <HowWeWork />
      <FewWords />
    </>
  )
}

export default page