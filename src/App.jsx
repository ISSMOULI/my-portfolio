import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, ExternalLink, Menu, X, Linkedin } from 'lucide-react';


import googleclone from "./assets/images/google-clone.png";
import shoestore from "./assets/images/shoe-store.png";
import liquor from "./assets/images/liquor.png";

import mouli1 from "./assets/images/mouli.jpg";
import mouli2 from "./assets/images/mouli2.jpg";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Removed form data state since we no longer have a form

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Offset for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Removed form handling functions since we no longer have a form

  // Project data
  const projects = [
    {
      id: 1,
      title: "Google Clone",
      description: "A simple clone of Google Search page using HTML and CSS.",
      technologies: ["HTML", "CSS"],
      demoLink: "https://mouli-googleclone.netlify.app/",
      sourceLink: "https://github.com/ISSMOULI/google-clone",
      Image: googleclone,
    },
    {
      id: 2,
      title: "Shoe Store",
      description: "A responsive shoe store website with product listings.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      demoLink: "https://puma-mouli.netlify.app/",
      sourceLink: "https://github.com/ISSMOULI/puma-store-mouli",
      Image: shoestore,
    },
    {
      id: 3,
      title: "Online Liquor Store",
      description: "An online liquor store with product listings and a shopping cart.",
      technologies: ["React", "Tailwind CSS"],
      demoLink: "https://liquor-store-mouli.netlify.app/",
      sourceLink: "https://github.com/ISSMOULI/liquor-store",
      Image: liquor,
    },
  ];

  const Images = [
    {
      id: 1,
      IImage: mouli1,
    },
    {
      id: 2,
      IImage: mouli2,
    },
  ];

  // Skills data - removed level property
  const skills = [
    { name: "HTML5 + CSS3" },
    { name: "JavaScript" },
    { name: "PHP" },
    // { name: "React" },
    // { name: "Node.js" },
    // { name: "Tailwind CSS" },
    // { name: "MongoDB" },
    { name: "Git / GitHub" },
    { name: "Python3" },
    { name: "C Programming" },
    { name: "Data Structures and Algorithms" },
    { name: "SQL" },
    { name: "Excel" },
  ];

  // Social media links
  const socialLinks = {
    github: "https://github.com/ISSMOULI",
    linkedin: "https://www.linkedin.com/in/indani-satya-sai-mouli-87ab53249/"
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white bg-opacity-95 shadow-md z-50 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-3 px-6 shadow-inner animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-600 py-2 transition-colors duration-300 capitalize text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Removed job titles */}
      <section id="home" className="pt-28 pb-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Hello, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">INDANI SATYA SAI MOULI</span>
              </h1>
              <div className="flex gap-4 mt-8">
                {/* Social Media Icons */}
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors shadow-md"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <button onClick={() => scrollToSection('projects')} className="bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                  View My Work
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center p-1 animate-float shadow-xl">
              <div className="bg-white w-full h-full rounded-full overflow-hidden">
                {/* Replace with your image src */}
                <img src={mouli1} alt="Your Photo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fadeInUp">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-xl animate-fadeInLeft">
                {/* Replace with your second image */}
                <img src={mouli2} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12 animate-fadeInRight">
              <p className="text-lg text-gray-700 mb-4">
                I'm a passionate web developer with expertise in creating responsive and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I bring ideas to life through clean and efficient code.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I've worked on various projects ranging from simple landing pages to complex web applications. I'm constantly learning and adapting to new technologies to deliver the best solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Creative</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Problem Solver</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Detail-Oriented</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Collaborative</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Removed level display */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fadeInUp">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-fadeIn hover:shadow-lg transition-shadow text-center">
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fadeInUp">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 animate-fadeIn"
              >
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  {/* <img src="/api/placeholder/400/250" alt={project.title} className="w-full h-full object-cover" /> */}
                  <img src={project.Image} alt={project.Image} className="w-full h-full object-cover"/>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.sourceLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fadeInUp">
            Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 animate-fadeIn text-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 mb-4">Feel free to reach out to me at:</p>
              <a 
                href="mailto:ssmouliindani@gmail.com" 
                className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-flex items-center gap-2"
              >
                ssmouliindani@gmail.com
              </a>
              <p className="text-gray-600 mt-8">Looking forward to connecting with you!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                INDANI SATYA SAI MOULI
              </h3>
              <p className="text-gray-400 mt-2">ML & Web Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} ISSMOULI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Return to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 animate-pulse"
          aria-label="Return to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Add CSS animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-in-out;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-in-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-in-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}