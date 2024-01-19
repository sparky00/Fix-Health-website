import React from 'react'
import Header from '../Components/Header'
import Appointment from '../Components/Appointment'
import DoctorsList from '../Components/DoctorsList'
import { useParams } from 'react-router-dom'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
const Landing = () => {
    const {city} = useParams();
  return (
    <>
    <Header/>
    <Appointment/>
    <DoctorsList city={city}/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Landing