'use client';

import Image from "next/image";
import ClearformLogo from "@/public/images/logowname.png";
import { useState } from "react";
import FAQ from "@/components/faq";

const gradientButtonStyles = `
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

export default function EarlyAccessClient() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        ageRange: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setServerError("");
        setErrors({});

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
            } else {
                if (data.errors && Array.isArray(data.errors)) {
                    // Map Zod errors back to form fields
                    const newErrors: { [key: string]: string } = {};
                    data.errors.forEach((err: any) => {
                        if (err.path && err.path[0]) {
                            newErrors[err.path[0]] = err.message;
                        }
                    });
                    setErrors(newErrors);
                } else {
                    setServerError(data.message || "Failed to submit form. Please try again.");
                }
            }
        } catch (error) {
            console.error("Submission error:", error);
            setServerError("A network error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-32 mb-10 overflow-hidden">
            <style>{gradientButtonStyles}</style>
            <div className={`w-full transition-all duration-400 ease-in-out ${submitted ? 'max-w-2xl' : 'max-w-xl'} mt-0`}>
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
                                {/* Full Name */}
                                <div className="form-field space-y-1.5">
                                    <label htmlFor="name1" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text" name="name" id="name1" autoComplete="name"
                                        placeholder="e.g. Alex Johnson"
                                        value={formData.name} onChange={handleChange}
                                        className={`w-full px-4 py-2.5 text-sm bg-gray-50 border rounded-lg outline-none transition-all duration-150 focus:bg-white focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 placeholder:text-gray-400 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                                        required
                                    />
                                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                </div>

                                {/* Phone Number */}
                                <div className="form-field space-y-1.5">
                                    <label htmlFor="phone1" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel" name="phone" id="phone1" autoComplete="tel"
                                        placeholder="e.g. +91 98765 43210"
                                        value={formData.phone} onChange={handleChange}
                                        className={`w-full px-4 py-2.5 text-sm bg-gray-50 border rounded-lg outline-none transition-all duration-150 focus:bg-white focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 placeholder:text-gray-400 ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                                        required
                                    />
                                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                                </div>

                                {/* Email Address */}
                                <div className="form-field space-y-1.5">
                                    <label htmlFor="email1" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email" name="email" id="email1" autoComplete="email"
                                        placeholder="e.g. alex@company.com"
                                        value={formData.email} onChange={handleChange}
                                        className={`w-full px-4 py-2.5 text-sm bg-gray-50 border rounded-lg outline-none transition-all duration-150 focus:bg-white focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 placeholder:text-gray-400 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                                        required
                                    />
                                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                </div>

                                {/* Location/City */}
                                <div className="form-field space-y-1.5">
                                    <label htmlFor="location1" className="block text-sm font-medium text-gray-700">Location / City</label>
                                    <input
                                        type="text" name="location" id="location1" autoComplete="address-level2"
                                        placeholder="e.g. Bengaluru"
                                        value={formData.location} onChange={handleChange}
                                        className={`w-full px-4 py-2.5 text-sm bg-gray-50 border rounded-lg outline-none transition-all duration-150 focus:bg-white focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 placeholder:text-gray-400 ${errors.location ? 'border-red-400' : 'border-gray-200'}`}
                                        required
                                    />
                                    {errors.location && <p className="text-xs text-red-500">{errors.location}</p>}
                                </div>

                                {/* Age Range */}
                                <div className='form-field space-y-2'>
                                    <label className="block text-gray-700 font-medium text-sm">
                                        Age Range
                                        <span className="ml-2 text-xs font-normal text-gray-400">(Optional)</span>
                                    </label>
                                    <div className="inline-flex w-full rounded-xl border border-gray-200 bg-gray-100 p-1">
                                        {['Below 18', '18–30', '30–40', '40+'].map((range) => (
                                            <button
                                                key={range}
                                                type="button"
                                                onClick={() => handleAgeRangeChange(range)}
                                                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-150 ${formData.ageRange === range
                                                    ? 'bg-gray-900 text-white shadow-sm'
                                                    : 'bg-transparent text-gray-500 hover:text-gray-800'
                                                    }`}
                                            >
                                                {range}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Server Error Message */}
                                {serverError && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-sm text-red-600 font-medium">{serverError}</p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="submit-btn bg-slate-900 w-full mt-8 px-8 py-3 text-white rounded-xl whitespace-nowrap font-bold shadow-lg transition-all duration-300 text-lg tracking-wide group hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Request Access
                                                <span className="group-hover:translate-x-1 transition-transform duration-200 flex items-center">
                                                    <svg className="w-5 h-5 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>
                        ) : (
                            <div
                                className="success-message"
                                style={{ animation: "fadeInSuccess 0.35s ease-out forwards", opacity: 0 }}
                            >
                                <style>{`
                  @keyframes fadeInSuccess {
                    from { opacity: 0; transform: translateY(6px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                `}</style>
                                <div className="flex flex-row items-center gap-8 py-6 px-2">
                                    <div className="shrink-0 w-20 h-20 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                                        <svg className="w-9 h-9 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Thank You.</h2>
                                        <p className="text-base text-gray-600 leading-relaxed mb-1">
                                            You're on the Clearform beta list. Please check your email.
                                        </p>
                                        <p className="text-sm text-gray-400 mb-5">You can return to the form anytime.</p>
                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                setFormData({ name: "", phone: "", email: "", location: "", ageRange: "" });
                                            }}
                                            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                            Go Back
                                        </button>
                                    </div>
                                </div>
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
