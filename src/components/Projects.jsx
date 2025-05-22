import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Github, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import './Projects.css';

function Projects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10;
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
    description: "A responsive and animated personal portfolio website showcasing my skills, experience, and projects, built with ReactJS and modern CSS.",
    image: "/images/portfolio.png",
    github: "https://github.com/ATIMuskan/portfolio-website/",
    demo: "https://beamish-lollipop-2355c0.netlify.app/",
    featured: true,
  },
  {
    title: "Blog Platform",
    tech: "Node.js, MongoDB, Express",
    description: "A full-stack blogging application that allows users to register, log in, create articles, and comment on posts. Built using the MERN stack.",
    image: "/images/blog.png",
    github: "https://github.com/ATIMuskan",
    demo: "https://github.com/ATIMuskan",
    featured: false,
  },
  {
    title: "E-commerce Site",
    tech: "ReactJS, Stripe, Firebase",
    description: "An end-to-end e-commerce web application with user authentication, product browsing, cart management, and secure Stripe payments.",
    image: "/images/ecommerce.png",
    github: "https://github.com/ATIMuskan/linkinsighter",
    demo: "https://github.com/ATIMuskan/linkinsighter",
    featured: false,
  },
  {
    title: "Weather App",
    tech: "React, OpenWeather API",
    description: "A sleek and intuitive weather application that provides real-time weather forecasts and conditions using the OpenWeatherMap API.",
    image: "/images/weather.png",
    github: "https://github.com/ATIMuskan/",
    demo: "https://github.com/ATIMuskan/",
    featured: false,
  },
  {
    title: "Task Manager",
    tech: "MERN Stack",
    description: "A task management application where users can create, edit, and delete tasks, with full authentication and a clean, modern UI.",
    image: "/images/taskmanager.png",
    github: "https://github.com/ATIMuskan/",
    demo: "https://github.com/ATIMuskan/",
    featured: true,
  },
  {
    title: "Chat App",
    tech: "Socket.IO, Node.js",
    description: "A real-time chat application that allows multiple users to join chat rooms and communicate using WebSockets with user authentication.",
    image: "/images/chat.png",
    github: "https://github.com/ATIMuskan/",
    demo: "https://github.com/ATIMuskan/",
    featured: false,
  },
  {
    title: "Expense Tracker",
    tech: "ReactJS, LocalStorage",
    description: "A personal finance tracker to monitor income and expenses with dynamic charts and persistent data storage via LocalStorage.",
    image: "/images/expense.png",
    github: "https://github.com/ATIMuskan/",
    demo: "https://github.com/ATIMuskan/",
    featured: false,
  },
  {
    title: "Food Delivery UI",
    tech: "HTML, CSS, JS",
    description: "A visually appealing and interactive front-end prototype for a food delivery app, focusing on animations and responsive design.",
    image: "/images/food.png",
    github: "https://github.com/Muskan-23/food-delivery",
    demo: "https://your-food-live-link.com",
    featured: false,
  },
  {
    title: "Backend CRUD Based",
    tech: "JavaScript, Express, MongoDB, Node.js",
    description: "A robust RESTful API enabling CRUD operations on employee records, built using Express.js and MongoDB with modular routes.",
    image: "/images/ai.png",
    github: "https://github.com/ATIMuskan/EmployeeAPI",
    demo: "https://github.com/ATIMuskan/EmployeeAPI",
    featured: true,
  },
  {
    title: "Web Portal",
    tech: "Next.js, TailwindCSS",
    description: "A fast-loading and SEO-friendly web portal featuring smooth scrolling, section navigation, and responsive layout built with Next.js.",
    image: "/images/landing.png",
    github: "https://github.com/ATIMuskan/web-portal",
    demo: "https://github.com/ATIMuskan/web-portal",
    featured: false,
  },
];


  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <h2 className="projects-title">
            🚀 {count}+ Projects Completed
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-slide">
                <div className="project-card">
                  {project.featured && (
                    <div className="featured-badge">🔥 Featured</div>
                  )}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-tech">{project.tech}</p>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-buttons">
                      <a href={project.github} target="_blank" className="btn code-btn">
                        <Github size={20} /> View Code
                      </a>
                      <a href={project.demo} target="_blank" className="btn demo-btn">
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
