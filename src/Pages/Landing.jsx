import React from 'react'
import Header from '../Components/Header'
import Appointment from '../Components/Appointment'
import DoctorsList from '../Components/DoctorsList'
import { useParams } from 'react-router-dom'
const Landing = () => {
    const {city} = useParams();
  return (
    <>
    <Header/>
    <Appointment/>
    <DoctorsList city={city}/>
    </>
  )
}

export default Landing