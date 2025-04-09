// pages/index.js
"use client"
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Investment'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - e.g., send to API
    console.log('Form submitted:', formData);
    // Close modal and show success message
    setShowModal(false);
    alert('Thank you for your interest! Our team will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Head>
        <title>The Horizon Residences | Luxury Off-Plan Project</title>
        <meta name="description" content="Exclusive off-plan luxury residences with premium amenities in a prime location. Pre-launch prices available now." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navigation */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-900">Horizon Residences</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#overview" className="text-gray-700 hover:text-indigo-700 font-medium">Overview</a>
            <a href="#features" className="text-gray-700 hover:text-indigo-700 font-medium">Features</a>
            <a href="#gallery" className="text-gray-700 hover:text-indigo-700 font-medium">Gallery</a>
            <a href="#location" className="text-gray-700 hover:text-indigo-700 font-medium">Location</a>
            <a href="#investment" className="text-gray-700 hover:text-indigo-700 font-medium">Investment</a>
          </nav>
          <button 
            onClick={() => setShowModal(true)}
            className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition-all shadow-md hover:shadow-lg"
          >
            Register Interest
          </button>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-cover bg-center relative" style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-1">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">The Future of Luxury Living Starts Here</h1>
            <p className="text-xl text-white/90 mb-8">Exclusive pre-launch prices available for a limited time on our signature waterfront development</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-md text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Reserve Your Unit
              </button>
              <a 
                href="#investment" 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-md text-lg transition-all border border-white/30"
              >
                View Investment Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A New Standard of Living</h2>
              <p className="text-lg text-gray-700 mb-6">Horizon Residences offers an unprecedented opportunity to own a piece of architectural excellence in the heart of the city's most coveted district.</p>
              <p className="text-lg text-gray-700 mb-8">With completion scheduled for Q2 2026, early investors will benefit from substantial capital appreciation and premium rental yields.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">Studio, 1, 2 & 3 BR</h3>
                  <p className="text-gray-600">Thoughtfully designed spaces</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">5-Year Plan</h3>
                  <p className="text-gray-600">Projected 40% ROI</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">Premium Location</h3>
                  <p className="text-gray-600">Close to business & leisure</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">Smart Home</h3>
                  <p className="text-gray-600">Future-ready technology</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img src="/api/placeholder/800/450" alt="Horizon Residences Exterior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-48 rounded-xl overflow-hidden shadow-xl hidden md:block">
                <img src="/api/placeholder/300/200" alt="Horizon Residences Interior" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Amenities */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">World-Class Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every detail of Horizon Residences has been meticulously planned to provide an unparalleled living experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Infinity Pool",
                description: "Panoramic views from our rooftop infinity pool",
                icon: "🏊‍♂️"
              },
              {
                title: "Smart Home Systems",
                description: "Integrated home automation in every residence",
                icon: "🏠"
              },
              {
                title: "Private Garden",
                description: "Lush landscaped gardens and relaxation areas",
                icon: "🌳"
              },
              {
                title: "Premium Fitness Center",
                description: "State-of-the-art equipment and yoga studio",
                icon: "💪"
              },
              {
                title: "24/7 Concierge",
                description: "Dedicated staff to attend to your every need",
                icon: "👨‍💼"
              },
              {
                title: "Private Parking",
                description: "Secure underground parking with EV charging",
                icon: "🚗"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our stunning interiors and architectural excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all group">
                <div className="relative aspect-[4/3]">
                  <img src={`/api/placeholder/600/450?text=Gallery+Image+${num}`} alt={`Gallery image ${num}`} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-md text-lg transition-all"
            >
              Request Full Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Prime Location</h2>
              <p className="text-lg text-gray-700 mb-6">Strategically positioned in the city's most vibrant district, offering unparalleled connectivity and convenience.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-indigo-100 p-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">5 minutes to Business District</h3>
                    <p className="text-gray-600">Quick access to major corporate headquarters</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-indigo-100 p-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a2 2 0 100-4h-3V5a1 1 0 00-1-1H3zM14 7a1 1 0 011 1v1h-2V8a1 1 0 011-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">10 minutes to Shopping District</h3>
                    <p className="text-gray-600">Premium retail, dining and entertainment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-indigo-100 p-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">15 minutes to Beach</h3>
                    <p className="text-gray-600">Enjoy waterfront leisure activities</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowModal(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-md transition-all"
              >
                Schedule Site Visit
              </button>
            </div>
            
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <img src="/api/placeholder/800/600?text=Location+Map" alt="Project location map" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Investment Opportunity</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">Secure your future with our exclusive pre-launch payment plans and early-bird pricing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Studio Apartment",
                size: "500-600 sq ft",
                price: "From $250,000",
                payment: "20% down, 80% over construction"
              },
              {
                type: "1 Bedroom Residence",
                size: "700-850 sq ft",
                price: "From $350,000",
                payment: "20% down, 80% over construction",
                featured: true
              },
              {
                type: "2 Bedroom Residence",
                size: "1,100-1,300 sq ft",
                price: "From $500,000",
                payment: "20% down, 80% over construction"
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-8 transition-all ${
                  plan.featured 
                    ? 'bg-indigo-700 shadow-xl scale-105' 
                    : 'bg-indigo-800/50 hover:bg-indigo-800'
                }`}
              >
                {plan.featured && (
                  <div className="bg-yellow-400 text-indigo-900 font-semibold px-4 py-1 rounded-full inline-block mb-4 text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.type}</h3>
                <p className="text-indigo-100 mb-4">{plan.size}</p>
                <p className="text-3xl font-bold mb-2">{plan.price}</p>
                <p className="text-indigo-100 mb-6">{plan.payment}</p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Premium finishes
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Smart home features
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Resort-style amenities
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Guaranteed ROI program
                  </li>
                </ul>
                <button 
                  onClick={() => setShowModal(true)}
                  className={`w-full py-3 rounded-md font-semibold transition-all ${
                    plan.featured 
                      ? 'bg-white text-indigo-900 hover:bg-gray-100' 
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                  }`}
                >
                  Reserve Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Future Home Today</h2>
            <p className="text-xl text-white/90 mb-8">Lock in pre-launch prices with only 10% initial deposit. Limited units available at these exclusive rates.</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <div className="flex justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10%</div>
                  <div className="text-white/80">Initial deposit</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10%</div>
                  <div className="text-white/80">On construction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">80%</div>
                  <div className="text-white/80">On completion</div>
                </div>
              </div>
              <p className="text-white/90">*Additional flexible payment plans available</p>
            </div>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-indigo-900 hover:bg-gray-100 font-bold py-4 px-12 rounded-md text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Secure Your Investment Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
    </footer>

        </div>

        )}