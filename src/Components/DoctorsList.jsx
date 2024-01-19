import React from 'react'
import { Menu, X, Check } from 'lucide-react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const faqs = [
  [
    {
      name: 'Emily Thompson',
      answer:
        'Physiotherapy has been a game-changer for me, and this team made it simple and effective. Grateful for their expertise!',
    },
    {
      name: 'Alex Rodriguez',
      answer:
        'Transparent pricing, compassionate care. My recovery journey with physio treatment became much smoother. Thank you all!',
    },
    {
      name: 'Linda Chen',
      answer:
        'Exceptional service and clear pricing. The teams dedication helped me regain strength and confidence',
    },
  ],
  [
    {
      name: 'David Miller',
      answer:
        'I appreciate the straightforward pricing structure. The simplicity combined with top-notch care made my physiotherapy experience excellent.',
    },
    {
      name: 'Sophie Bennett',
      answer:
        'From day one, I felt supported. The pricing was clear, and the results exceeded my expectations. Thank you for the exceptional care!',
    },
    {
      name: 'Aisha Patel',
      answer:
        'The simplicity of pricing and the dedication of the physio team stood out. They truly care about your well-being. Thank you for everything!',
    },
  ],
]

const DoctorsList=({city})=> {

    const [doctors, setDoctors] = useState([]);
    

    useEffect(()=>{
        axios.get("https://dummyapi.online/api/users")
        .then(res=> setDoctors(res.data));
    },[])
      console.log(doctors)

      const filteredDoctors = city
      ? doctors.filter((doctor) =>
          doctor.address &&
          doctor.address.city &&
          doctor.address.city.toLowerCase() === city.toLowerCase()
        )
      : doctors;

  return (
    <div className='bg-appointment'>
    <div className="invert flex flex-col bg-black space-y-8 pb-10 pt-12 text-center">
          <p className="text-3xl font-bold text-white md:text-5xl md:leading-10">
          Meet Our Experts{city? ` in ${city}`: ''}
          </p>
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
          Experience the Benefits of Advanced Technology and Expert Care
          </p>
        </div>
    <div className="mx-auto max-w-7xl px-2 md:px-4">
     
      <div>
        {/* Hero Section */}
        
        <div className="mt-8 w-full space-y-4 md:mt-12">
      <div className="grid gap-8 lg:grid-cols-3">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="card bg-white shadow-md rounded-2xl border border-gray-200 h-full">
            <div className="card-header px-8 pt-10">
              <p className="text-3xl font-bold leading-10">Dr. {doctor.name}</p>
              <p className="text-xl font-semibold leading-loose text-gray-900">MBBS</p>
              <p className="text-base leading-normal text-gray-600">
                {doctor.address.city}, {doctor.address.state}
              </p>
            </div>
            <div className="card-body px-8 pt-8 flex items-center justify-center rounded-full bg-gray-100 py-1">
              <p className="w-full text-base leading-normal text-gray-600">Email: {doctor.email}</p>
            </div>
            <br />
            <div className="card-footer px-8 pb-8">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
        {/* FAQs */}
       
      </div>
     
    </div>
    </div>
  )
}

export default DoctorsList