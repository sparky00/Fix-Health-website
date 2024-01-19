import React from "react";

const faqs = [
  [
    {
      name: "Emily Thompson",
      answer:
        "Physiotherapy has been a game-changer for me, and this team made it simple and effective. Grateful for their expertise!",
    },
    {
      name: "Alex Rodriguez",
      answer:
        "Transparent pricing, compassionate care. My recovery journey with physio treatment became much smoother. Thank you all!",
    },
    {
      name: "Linda Chen",
      answer:
        "Exceptional service and clear pricing. The teams dedication helped me regain strength and confidence",
    },
  ],
  [
    {
      name: "David Miller",
      answer:
        "I appreciate the straightforward pricing structure. The simplicity combined with top-notch care made my physiotherapy experience excellent.",
    },
    {
      name: "Sophie Bennett",
      answer:
        "From day one, I felt supported. The pricing was clear, and the results exceeded my expectations. Thank you for the exceptional care!",
    },
    {
      name: "Aisha Patel",
      answer:
        "The simplicity of pricing and the dedication of the physio team stood out. They truly care about your well-being. Thank you for everything!",
    },
  ],
];

const Testimonial = () => {
  return (
<div className="bg-appointment">
    <div className="invert flex flex-col bg-black space-y-8 pb-10 pt-12 text-center">
    <p className="text-3xl font-bold text-white md:text-5xl md:leading-10">
    Patient Testimonial
    </p>
    <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
    Empowering Lives, Transforming Journeys: Discover the Healing Stories of Our Valued Patients
    </p>
  </div>
    <div  className=" mx-auto max-w-7xl px-2 md:px-4">
      <div className="bg-appointment space-y-16 bg-white">
        <div>
  
          {/* faq */}
          {faqs.map((item, index) => (
            <div
              key={`faq-group-${index}`}
              className="grid md:grid-cols-3 md:space-x-8"
            >
              {item.map((faq) => (
                <div key={faq.question} className="rounded-md p-4 w-66 h-48 invert bg-white  border border-black my-8 space-y-5">
                  <div className="flex w-full flex-col space-y-2">
                    <p className="w-full text-lg font-semibold text-gray-900">
                      {faq.name}
                    </p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="invert mt-10">
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
    </div>
  );
};

export default Testimonial;
