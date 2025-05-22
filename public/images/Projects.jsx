// src/components/Projects.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Github, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

function Projects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10; // Adjust this number based on your project count
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      tech: "ReactJS, CSS, Animations",
      description: "I created a stunning personal portfolio using ReactJS with smooth animations and responsive design.",
      image: "/portfolio-website/images/portfolio.png",
      github: "https://github.com/Muskan-23/portfolio-website", // Replace with your actual GitHub repo
      demo: "https://your-portfolio-live-link.com",
      featured: true,
    },
    {
      title: "Blog Platform",
      tech: "Node.js, MongoDB, Express",
      description: "A full-stack blog platform where users can register, log in, write articles, and comment.",
      image: "/portfolio-website/images/portfolio.png",
      github: "https://github.com/Muskan-23/blog-platform", // Replace with your actual GitHub repo
      demo: "https://your-blog-live-link.com",
      featured: false,
    },
    {
      title: "E-commerce Site",
      tech: "ReactJS, Stripe, Firebase",
      description: "Developed a fully functional e-commerce site where users can browse products, add to cart, and checkout.",
      image: "/portfolio-website/images/portfolio.png",
      github: "https://github.com/Muskan-23/ecommerce-site", // Replace with your actual GitHub repo
      demo: "https://your-ecommerce-live-link.com",
      featured: false,
    },
    {
      title: "Weather App",
      tech: "React, OpenWeather API",
      description: "Built a weather app fetching live weather updates using OpenWeatherMap API.",
      image: "/portfolio-website/images/portfolio.png",
      github: "https://github.com/Muskan-23/weather-app", // Replace with your actual GitHub repo
      demo: "https://your-weather-live-link.com",
      featured: false,
    },
    {
      title: "Task Manager",
      tech: "MERN Stack",
      description: "A full-stack task manager app with user authentication, CRUD operations, and beautiful UI.",
      image: "/portfolio-website/images/portfolio.png",
      github: "https://github.com/Muskan-23/task-manager", // Replace with your actual GitHub repo
      demo: "https://your-taskmanager-live-link.com",
      featured: true,
    },
    {
      title: "Chat App",
      tech: "Socket.IO, Node.js",
      description: "Real-time chat application with WebSockets and authentication.",
      image: "/portfolio-website/images/portfolio.png",
      github: "https://github.com/Muskan-23/chat-app", // Replace with your actual GitHub repo
      demo: "https://your-chat-live-link.com",
      featured: false,
    },
    {
      title: "Expense Tracker",
      tech: "ReactJS, LocalStorage",
      description: "Track your expenses and income with a beautiful frontend and persistent storage.",
      image: "/portfolio-website/images/portfolio.png",
      github: "https://github.com/Muskan-23/expense-tracker", // Replace with your actual GitHub repo
      demo: "https://your-expense-live-link.com",
      featured: false,
    },
    {
      title: "Food Delivery UI",
      tech: "HTML, CSS, JS",
      description: "Designed a modern UI for a food delivery app with smooth animations.",
      image: "/portfolio-website/images/portfolio.png",
      github: "https://github.com/Muskan-23/food-delivery", // Replace with your actual GitHub repo
      demo: "https://your-food-live-link.com",
      featured: false,
    },
    {
      title: "AI Image Generator",
      tech: "React, DALL-E API",
      description: "Create stunning AI-generated images using DALL-E API integration.",
      image: "/portfolio-website/images/portfolio.png",
      github: "https://github.com/Muskan-23/ai-generator", // Replace with your actual GitHub repo
      demo: "https://your-ai-live-link.com",
      featured: true,
    },
    {
      title: "Landing Page",
      tech: "Next.js, TailwindCSS",
      description: "Built a clean and SEO-optimized landing page with Next.js and Tailwind.",
      image: "/portfolio-website/images/portfolio.png",
      github: "https://github.com/Muskan-23/landing-page", // Replace with your actual GitHub repo
      demo: "https://your-landing-live-link.com",
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-100" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 🚀 Animated Project Counter */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-indigo-600 animate-pulse">
            🚀 {count}+ Projects Completed
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="rounded-2xl overflow-hidden p-2"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all duration-500">
                <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl p-8 shadow-2xl backdrop-blur-md relative">
                  
                  {/* 🔥 Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                      🔥 Featured
                    </div>
                  )}

                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full md:w-1/2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div className="w-full md:w-1/2">
                    <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-indigo-600 font-medium mb-2">{project.tech}</p>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-4">
                      
                      {/* Buttons with Icons */}
                      <a 
                        href={project.github} 
                        target="_blank" 
                        className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full hover:scale-105 hover:bg-gray-900 transition-all duration-300"
                      >
                        <Github size={20} /> View Code
                      </a>

                      <a 
                        href={project.demo} 
                        target="_blank" 
                        className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full hover:scale-105 hover:bg-indigo-700 transition-all duration-300"
                      >
                        <ExternalLink size={20} /> Live Demo
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
