'use client';

import { useState } from 'react';
import { FaGraduationCap, FaBook, FaCalendarAlt, FaStar, FaTrophy, FaClock, FaCode, FaLaptopCode } from 'react-icons/fa';

const Education = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Dhaka',
      year: '2018 - 2022',
      grade: 'CGPA: 3.75/4.00',
      description: 'Specialized in Software Engineering and Web Development. Completed comprehensive projects in React, Node.js, database management, and modern web technologies.',
      achievements: ['Dean\'s List for 3 consecutive semesters', 'Best Final Year Project Award', 'Programming Contest Winner', 'Academic Excellence Award'],
      icon: <FaGraduationCap />,
      color: 'from-blue-400 to-purple-600',
      bgColor: 'from-blue-400/10 to-purple-600/10'
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Dhaka College',
      year: '2016 - 2018',
      grade: 'GPA: 5.00/5.00',
      description: 'Science background with intensive focus on Mathematics, Physics, and Computer Science fundamentals.',
      achievements: ['Board Scholarship Recipient', 'Science Fair Winner', 'Mathematics Olympiad Participant', 'Perfect GPA Achievement'],
      icon: <FaBook />,
      color: 'from-green-400 to-teal-600',
      bgColor: 'from-green-400/10 to-teal-600/10'
    }
  ];

  const courses = [
    {
      name: 'Full Stack Web Development Bootcamp',
      provider: 'freeCodeCamp',
      duration: '300+ hours',
      year: '2021',
      level: 'Advanced',
      skills: ['HTML/CSS', 'JavaScript ES6+', 'React.js', 'Node.js', 'MongoDB', 'Express.js'],
      icon: <FaLaptopCode />,
      color: 'from-orange-400 to-red-600',
      rating: 5
    },
    {
      name: 'Advanced React Patterns & Performance',
      provider: 'Udemy',
      duration: '40 hours',
      year: '2022',
      level: 'Expert',
      skills: ['React Hooks', 'Context API', 'Performance Optimization', 'Testing', 'Custom Hooks', 'Suspense'],
      icon: <FaCode />,
      color: 'from-cyan-400 to-blue-600',
      rating: 5
    },
    {
      name: 'DevOps & Cloud Infrastructure',
      provider: 'Coursera',
      duration: '60 hours',
      year: '2023',
      level: 'Intermediate',
      skills: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'AWS Services', 'Terraform', 'Jenkins'],
      icon: <FaLaptopCode />,
      color: 'from-purple-400 to-pink-600',
      rating: 4
    },
    {
      name: 'Modern JavaScript & TypeScript',
      provider: 'Pluralsight',
      duration: '80 hours',
      year: '2023',
      level: 'Advanced',
      skills: ['TypeScript', 'ES2023 Features', 'Async Programming', 'Module Systems', 'Testing Frameworks'],
      icon: <FaCode />,
      color: 'from-yellow-400 to-orange-600',
      rating: 5
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
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
                <FaGraduationCap className="text-4xl text-[var(--primary-color)] animate-bounce" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-lg animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 animate-slide-up">
            Education & <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">Learning</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            My academic journey and continuous learning path that shaped my expertise in modern web development and technology.
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
            { id: 'courses', label: 'Courses', icon: <FaBook /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-2xl shadow-[var(--primary-color)]/30 backdrop-blur-xl'
                  : 'glass border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--primary-color)]/50 hover:shadow-xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl'
              }`}
            >
              <span className={`text-xl transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {tab.icon}
              </span>
              <span className="text-lg">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'education' && (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] rounded-full opacity-30"></div>
              
              <div className="space-y-12">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="relative animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full border-4 border-[var(--primary-bg)] shadow-lg z-10"></div>
                    
                    {/* Timeline Content */}
                    <div className="ml-20 group">
                      <div className="glass rounded-3xl p-8 border border-[var(--border-color)] hover:border-[var(--primary-color)]/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl relative overflow-hidden">
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${edu.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center space-x-4">
                              <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                <span className="text-2xl">{edu.icon}</span>
                              </div>
                              <div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary-color)] transition-colors duration-300">{edu.degree}</h3>
                                <p className="text-[var(--primary-color)] font-semibold text-lg">{edu.institution}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="glass px-4 py-2 rounded-full border border-[var(--primary-color)]/30">
                                <span className="text-[var(--primary-color)] font-bold">{edu.year}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Grade */}
                          <div className="mb-6">
                            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
                              <FaTrophy className="text-[var(--secondary-color)]" />
                              <span className="text-[var(--text-secondary)] font-medium">{edu.grade}</span>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-6">{edu.description}</p>
                          
                          {/* Achievements */}
                          <div className="border-t border-[var(--border-color)] pt-6">
                            <h4 className="text-[var(--text-primary)] font-bold text-xl mb-4 flex items-center space-x-2">
                              <FaStar className="text-[var(--primary-color)]" />
                              <span>Key Achievements</span>
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {edu.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-center space-x-3 glass p-3 rounded-xl">
                                  <div className="w-3 h-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex-shrink-0"></div>
                                  <span className="text-[var(--text-secondary)]">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] rounded-full opacity-30"></div>
              
              <div className="space-y-12">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="relative animate-slide-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] rounded-full border-4 border-[var(--primary-bg)] shadow-lg z-10"></div>
                    
                    {/* Timeline Content */}
                    <div className="ml-20 group">
                      <div className="glass rounded-3xl p-8 border border-[var(--border-color)] hover:border-[var(--primary-color)]/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl relative overflow-hidden">
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${course.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center space-x-4">
                              <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                <span className="text-2xl">{course.icon}</span>
                              </div>
                              <div>
                                <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary-color)] transition-colors duration-300">{course.name}</h3>
                                <p className="text-[var(--primary-color)] font-semibold text-lg">{course.provider}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="glass px-4 py-2 rounded-full border border-[var(--secondary-color)]/30 mb-2">
                                <span className="text-[var(--secondary-color)] font-bold">{course.year}</span>
                              </div>
                              <div className="flex items-center space-x-1 justify-end">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar
                                    key={i}
                                    className={`text-sm ${i < course.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Course Details */}
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="glass p-4 rounded-xl">
                              <div className="flex items-center space-x-2 mb-2">
                                <FaClock className="text-[var(--primary-color)]" />
                                <span className="text-[var(--text-secondary)] text-sm font-medium">Duration</span>
                              </div>
                              <p className="text-[var(--text-primary)] font-bold text-lg">{course.duration}</p>
                            </div>
                            <div className="glass p-4 rounded-xl">
                              <div className="flex items-center space-x-2 mb-2">
                                <FaTrophy className="text-[var(--secondary-color)]" />
                                <span className="text-[var(--text-secondary)] text-sm font-medium">Level</span>
                              </div>
                              <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                                course.level === 'Expert' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                                course.level === 'Advanced' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                                'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              }`}>
                                {course.level}
                              </div>
                            </div>
                          </div>
                          
                          {/* Skills */}
                          <div className="border-t border-[var(--border-color)] pt-6">
                            <h4 className="text-[var(--text-primary)] font-bold text-lg mb-4 flex items-center space-x-2">
                              <FaCode className="text-[var(--primary-color)]" />
                              <span>Skills Learned</span>
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {course.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className={`bg-gradient-to-r ${course.color}/20 text-[var(--text-primary)] px-4 py-2 rounded-full text-sm font-medium border border-[var(--primary-color)]/30 hover:scale-105 transition-transform duration-200`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Education;
