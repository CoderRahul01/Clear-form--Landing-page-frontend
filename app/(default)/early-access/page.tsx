'use client';

import Image from "next/image";
import ClearformLogo from "@/public/images/logowname.png";
import { useState } from "react";
import FAQ from "@/components/faq";

const gradientButtonStyles = `
  @keyframes shift-gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes slideUpFade {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideUpFadeStagger {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scaleInFade {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .gradient-button {
    background: linear-gradient(-45deg, #ff4338, #ef4444, #dc2626, #b91c1c);
    background-size: 300% 300%;
    animation: shift-gradient 6s ease infinite;
    box-shadow: 0 0 20px rgba(255, 67, 56, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  .gradient-button:hover {
    animation: pulse-glow 1s ease-in-out infinite, shift-gradient 1s ease infinite;
  }
  
  .card-container {
    animation: slideUpFade 0.6s ease-out 0.2s both;
  }
  
  .logo-section {
    animation: slideUpFade 0.6s ease-out 0.3s both;
  }
  
  .headline {
    animation: slideUpFade 0.6s ease-out 0.4s both;
  }
  
  .subtext {
    animation: slideUpFade 0.6s ease-out 0.5s both;
  }
  
  .form-field {
    animation: slideUpFadeStagger 0.5s ease-out forwards;
  }
  
  .form-field:nth-child(1) { animation-delay: 0.6s; }
  .form-field:nth-child(2) { animation-delay: 0.7s; }
  .form-field:nth-child(3) { animation-delay: 0.8s; }
  .form-field:nth-child(4) { animation-delay: 0.9s; }
  .form-field:nth-child(5) { animation-delay: 1s; }
  .form-field:nth-child(6) { animation-delay: 1.1s; }
  
  .submit-btn {
    animation: slideUpFadeStagger 0.5s ease-out 1.2s both;
  }
  
  .footer-text {
    animation: slideUpFade 0.6s ease-out 1.3s both;
  }
  
  .success-message {
    animation: scaleInFade 0.5s ease-out;
  }
  
  .faq-section {
    animation: slideUpFade 0.6s ease-out 1.4s both;
  }
  
  .faq-item {
    animation: slideUpFadeStagger 0.5s ease-out forwards;
  }
  
  .faq-item:nth-child(1) { animation-delay: 1.5s; }
  .faq-item:nth-child(2) { animation-delay: 1.6s; }
`;

export default function EarlyAccessPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    ageRange: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAgeRangeChange = (range: string) => {
    setFormData(prev => ({
      ...prev,
      ageRange: range
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "", location: "", ageRange: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-red-100 via-blue-100 to-purple-100 px-4 py-25">
      <style>{gradientButtonStyles}</style>
      <div className="w-full max-w-xl mt-0">
        {/* Glassy Card Container */}
        <div className="card-container bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-1 md:p-10">
            <div>
                {/* Logo */}
                <div className="logo-section flex justify-center mb-3  w-fit mx-auto px-2">
                    <Image src={ClearformLogo} alt="Clearform Logo" className="h-12 w-auto" />
                </div>

                {/* Headline */}
                <h1 className="headline flex justify-center gap-3 text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
                    Join the Clearform Beta
                </h1>

                {/* Subtext */}
                <p className="subtext text-center text-gray-700 text-sm md:text-base mb-5 leading-relaxed">
                    Get exclusive access and help shape the future of form analytics. Spots are limited.
                </p>
            </div>
             <div>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Field */}
              <div className='form-field relative'>
                <input
                  type="text"
                  name="name"
                  id='name1'
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={` peer w-full h-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-colors ${
                    errors.name ? 'border-red-700' : 'border-gray-300'
                  }`}
                  required
                />
                <label htmlFor='name1' className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-red-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                                  ${formData.name?
                                  "-top-3 text-[13px] font-semibold  text-red-700":
                                  " top-2  text-gray-500 "}`}>
                  Full Name
                </label>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-700">{errors.name}</p>
                )}
              </div>

              {/* Phone Number Field */}
              <div className='form-field relative'>
                <input
                  type="tel"
                  name="phone"
                  id='phone1'
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={` peer w-full h-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-colors ${
                    errors.phone ? 'border-red-700' : 'border-gray-300'
                  }`}
                  required
                />
                <label htmlFor='phone1' className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-red-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                                  ${formData.phone?
                                  "-top-3 text-[13px] font-semibold  text-red-700":
                                  " top-2  text-gray-500 "}`}>
                  Phone Number
                </label>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-700">{errors.phone}</p>
                )}
              </div>

              {/* Email Address Field */}
              <div className='form-field relative'>
                <input
                  type="email"
                  name="email"
                  id='email1'
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={` peer w-full h-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-colors ${
                    errors.email ? 'border-red-700' : 'border-gray-300'
                  }`}
                  required
                />
                <label htmlFor='email1' className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-red-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                                  ${formData.email?
                                  "-top-3 text-[13px] font-semibold  text-red-700":
                                  " top-2  text-gray-500 "}`}>
                  Email Address
                </label>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-700">{errors.email}</p>
                )}
              </div>

              {/* Location/City Field */}
              <div className='form-field relative'>
                <input
                  type="text"
                  name="location"
                  id='location1'
                  autoComplete="address-level2"
                  value={formData.location}
                  onChange={handleChange}
                  className={` peer w-full h-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-colors ${
                    errors.location ? 'border-red-700' : 'border-gray-300'
                  }`}
                  required
                />
                <label htmlFor='location1' className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-red-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                                  ${formData.location?
                                  "-top-3 text-[13px] font-semibold  text-red-700":
                                  " top-2  text-gray-500 "}`}>
                  Location/City
                </label>
                {errors.location && (
                  <p className="mt-1 text-sm text-red-700">{errors.location}</p>
                )}
              </div>

              {/* Age Range Field */}
              <div className='form-field space-y-3'>
                <label className="block text-gray-700 font-medium text-sm">Age Range</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Below 18', '18 - 30', '30 - 40', '40+'].map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => handleAgeRangeChange(range)}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 border-2 ${
                        formData.ageRange === range
                          ? 'border-red-700 bg-red-50 text-red-700'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-red-400'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
                {errors.ageRange && (
                  <p className="mt-1 text-sm text-red-700">{errors.ageRange}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn gradient-button w-full mt-8 px-8 py-3 text-white rounded-xl whitespace-nowrap font-bold shadow-2xl transition-all duration-300 text-lg tracking-wide relative overflow-hidden group hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request Access
                  <span className="group-hover:translate-x-1 transition-transform duration-100">→</span>
                </span>
                <div 
                  className="absolute inset-0 bg-linear-to-r from-red-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                />
              </button>
            </form>
          ) : (
            /* Success Message */
            <div className="success-message text-center py-8">
              <div className="mb-4 border-y w-fit mx-auto py-3">
                <div className="inline-flex items-center justify-center w-26 h-26 bg-green-100 rounded-full">
                  <svg className="w-18 h-18 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Aboard!</h2>
              <p className="text-gray-700 text-sm">
                Thanks for joining. Check your email for next steps. We'll be in touch soon!
              </p>
            </div>
          )}
           

          {/* Footer Text */}
          <p className="footer-text text-xs text-gray-500 text-center mt-8">
            We care about your privacy. We'll only use your information to contact you about the beta.
          </p>
            </div>
        </div>


      </div>
              {/* FAQ Component */}
              <FAQ />
    </section>
  );
}
