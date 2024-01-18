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
    <>
    <div className="flex flex-col bg-black space-y-8 pb-10 pt-12 text-center">
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
          <div className="grid space-y-8 lg:grid-cols-3 lg:space-x-8 lg:space-y-0">
            {filteredDoctors.map((doctor) => (
              <div className="rounded-2xl border border-gray-200 bg-white shadow">
                <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
                  <p className="text-3xl font-bold leading-10">Dr. {doctor.name}</p>
                  <div className="flex w-full flex-col items-start justify-start space-y-1">
                    <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                      MBBS
                    </p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      {doctor.address.city},  {doctor.address.state}
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start px-8 pb-10 pt-8">
                  <div className="flex w-full flex-col space-y-4">
                    {/* {plan.features.map((feature) => ( */}
                      <div  className="inline-flex w-full">
                        <div className="flex items-center justify-center rounded-full bg-gray-100 py-1">
                        </div>
                        <p className="w-full text-base leading-normal text-gray-600">Email: {doctor.email}</p>
                      </div>
                    {/* ))} */}
                  </div>
                </div>
                <div className="flex w-full flex-col px-8 pb-8">
                <br /><br />
                  <div className="flex w-full flex-col items-start justify-start space-y-3">
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Book Appointment
                    </button>
                    {/* <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Contact Us
                    </button> */}
                    <br /><br />
                  </div>
                </div>
              </div>
             ))} 
          </div>
        </div>
        {/* FAQs */}
        <div className="mt-14 space-y-16 bg-white py-12">
          <div>
            <div className="">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-2xl font-bold leading-10 text-gray-900">Patient Testimonials</p>
                </div>
               
                <hr className="my-8" />
              </div>
            </div>
            {/* faq */}
            {faqs.map((item, index) => (
              <div key={`faq-group-${index}`} className="grid md:grid-cols-3 md:space-x-8">
                {item.map((faq) => (
                  <div key={faq.question} className="my-8 space-y-5">
                    <div className="flex w-full flex-col space-y-2">
                      <p className="w-full text-lg font-semibold text-gray-900">{faq.name}</p>
                      <p className="w-full text-base leading-normal text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div className="mt-10">
              <div className="flex flex-col justify-between rounded-md bg-gray-50 p-4 md:flex-row md:items-center md:p-8 lg:space-x-8">
                <div className="space-y-2">
                  <p className="text-xl font-semibold leading-loose text-gray-900">
                  Our patients successfully recovered by trusting in
                  </p>
                  <p className="text-base text-gray-600 md:text-lg md:leading-7">
                  India's #1 Physiotherapy Clinic
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:mt-0"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      {/* footer */}
      <div className="mx-auto max-w-7xl">
        <footer className="px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <span>
              <svg
                width="40"
                height="46"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <div className="mt-4 grow md:ml-12 md:mt-0">
              <p className="text-base font-semibold text-gray-700">
                © 2024 Fix Health
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Our Stores</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Washington</li>
                <li>New Hampshire</li>
                <li>Maine</li>
                <li>Texas</li>
                <li>Indiana</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Services</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>UI / UX Design</li>
                <li>App Development</li>
                <li>API reference</li>
                <li>API status</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
                <li>Media Policy</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Social Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  )
}

export default DoctorsList