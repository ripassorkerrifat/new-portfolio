'use client';

import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaUser, FaBuilding, FaProjectDiagram } from 'react-icons/fa';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Ripas delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made our project a huge success. The final product was delivered on time and within budget.',
      project: 'E-commerce Platform',
      color: 'from-pink-400 to-rose-600',
      bgColor: 'from-pink-400/10 to-rose-600/10'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Digital Solutions',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Working with Ripas was a game-changer for our startup. He transformed our ideas into a beautiful, functional application. His communication skills and problem-solving abilities are outstanding.',
      project: 'SaaS Dashboard',
      color: 'from-blue-400 to-cyan-600',
      bgColor: 'from-blue-400/10 to-cyan-600/10'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Creative Agency',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Ripas created a stunning portfolio website that perfectly captured our brand identity. The site is fast, responsive, and has significantly improved our client engagement. Highly recommended!',
      project: 'Portfolio Website',
      color: 'from-purple-400 to-indigo-600',
      bgColor: 'from-purple-400/10 to-indigo-600/10'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Founder',
      company: 'HealthTech Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The mobile-first application Ripas developed for us has been instrumental in our growth. His expertise in modern technologies and user experience design is truly impressive.',
      project: 'Healthcare App',
      color: 'from-green-400 to-emerald-600',
      bgColor: 'from-green-400/10 to-emerald-600/10'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'CTO',
      company: 'FinanceFlow',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Ripas built us a robust financial dashboard that handles complex data visualization beautifully. His code quality and architectural decisions have made maintenance a breeze.',
      project: 'Financial Dashboard',
      color: 'from-orange-400 to-red-600',
      bgColor: 'from-orange-400/10 to-red-600/10'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[var(--secondary-color)]/15 to-[var(--accent-color)]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: "3s"}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[var(--accent-color)]/10 to-[var(--primary-color)]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1.5s"}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl flex items-center justify-center border border-[var(--border-color)]/40 backdrop-blur-sm">
                <FaQuoteLeft className="text-4xl text-[var(--primary-color)] animate-bounce" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-lg animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 animate-slide-up">
            Client <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">Testimonials</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Don't just take my word for it - here's what my clients have to say about their experience working with me on their projects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Enhanced Main Testimonial */}
          <div className="group relative mb-16">
            <div className="glass rounded-3xl p-10 lg:p-16 border border-[var(--border-color)] hover:border-[var(--primary-color)]/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeTestimonial].bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Enhanced Quote Icon */}
                <div className="flex justify-center mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${testimonials[activeTestimonial].color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <FaQuoteLeft className="text-3xl text-white" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="text-center mb-10">
                  <p className="text-2xl lg:text-3xl text-[var(--text-primary)] leading-relaxed mb-10 italic font-light max-w-4xl mx-auto">
                    "{testimonials[activeTestimonial].text}"
                  </p>

                  {/* Enhanced Rating */}
                  <div className="flex justify-center mb-8 space-x-2">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="w-8 h-8 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>

                  {/* Enhanced Client Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                    <div className="relative">
                      <div className={`w-24 h-24 bg-gradient-to-br ${testimonials[activeTestimonial].color} rounded-full p-1 shadow-2xl`}>
                        <img 
                          src={testimonials[activeTestimonial].avatar} 
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/30 to-[var(--secondary-color)]/30 rounded-full blur-lg animate-pulse"></div>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-2">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                        <FaUser className="text-[var(--primary-color)]" />
                        <p className="text-[var(--primary-color)] font-semibold text-lg">
                          {testimonials[activeTestimonial].role}
                        </p>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <FaBuilding className="text-[var(--secondary-color)]" />
                        <p className="text-[var(--text-secondary)] text-lg">
                          {testimonials[activeTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Project Tag */}
                  <div className="flex items-center justify-center space-x-2">
                    <FaProjectDiagram className="text-[var(--accent-color)]" />
                    <span className={`bg-gradient-to-r ${testimonials[activeTestimonial].color}/20 text-[var(--text-primary)] px-6 py-3 rounded-full text-lg font-semibold border border-[var(--primary-color)]/30 hover:scale-105 transition-transform duration-200`}>
                      {testimonials[activeTestimonial].project}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="flex items-center justify-center space-x-8 mb-16">
            <button
              onClick={prevTestimonial}
              className="group w-16 h-16 glass rounded-2xl flex items-center justify-center transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)]/20 hover:scale-110 hover:shadow-xl hover:shadow-[var(--primary-color)]/20"
            >
              <FaChevronLeft className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-[var(--primary-color)] transition-colors duration-300" />
            </button>

            {/* Enhanced Dots Indicator */}
            <div className="flex space-x-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`relative transition-all duration-500 ${
                    index === activeTestimonial
                      ? 'scale-125'
                      : 'hover:scale-110'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? `bg-gradient-to-r ${testimonial.color} shadow-lg`
                      : 'bg-[var(--border-color)] hover:bg-[var(--text-secondary)]'
                  }`}>
                  </div>
                  {index === activeTestimonial && (
                    <div className={`absolute -inset-2 bg-gradient-to-r ${testimonial.color}/30 rounded-full blur-sm animate-pulse`}></div>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="group w-16 h-16 glass rounded-2xl flex items-center justify-center transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)]/20 hover:scale-110 hover:shadow-xl hover:shadow-[var(--primary-color)]/20"
            >
              <FaChevronRight className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-[var(--primary-color)] transition-colors duration-300" />
            </button>
          </div>

          {/* Enhanced Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 animate-slide-up ${
                  index === activeTestimonial ? 'scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`glass rounded-2xl p-6 border transition-all duration-500 backdrop-blur-xl relative overflow-hidden h-full ${
                  index === activeTestimonial 
                    ? `border-[var(--primary-color)]/60 shadow-2xl shadow-[var(--primary-color)]/20` 
                    : 'border-[var(--border-color)] hover:border-[var(--primary-color)]/40 hover:shadow-xl hover:shadow-[var(--primary-color)]/10'
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="relative mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl p-0.5 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full rounded-2xl object-cover"
                        />
                      </div>
                      {index === activeTestimonial && (
                        <div className={`absolute -inset-2 bg-gradient-to-r ${testimonial.color}/30 rounded-2xl blur-lg animate-pulse`}></div>
                      )}
                    </div>
                    
                    <h5 className="text-[var(--text-primary)] font-bold text-lg mb-1 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                      {testimonial.name}
                    </h5>
                    <p className="text-[var(--primary-color)] text-sm font-medium mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-[var(--text-secondary)] text-xs mb-3">
                      {testimonial.company}
                    </p>
                    
                    <div className="flex justify-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${index === activeTestimonial ? `bg-gradient-to-r ${testimonial.color}/20 border-[var(--primary-color)]/30 text-[var(--primary-color)]` : 'bg-[var(--border-color)]/20 border-[var(--border-color)]/30 text-[var(--text-secondary)]'}`}>
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
