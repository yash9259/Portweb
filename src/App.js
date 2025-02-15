import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import { FaLaptopCode, FaMobileAlt, FaCogs, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <div className="portfolio bg-gradient min-vh-100 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm sticky-top">
        <a className="navbar-brand" href="#">Yash Thakkar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#contact">Contact</a>
            <a className="nav-link" href="#about">About Me</a>
            <a className="nav-link" href="#experience">Experience & Skills</a>
            <a className="nav-link" href="#feedback">Feedback</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-center py-5 bg-dark text-light">
        <h1 className="display-4 fw-bold">I'm Yash Thakkar</h1>
        <p className="lead">Freelance Web & App Developer</p>
      </header>

      {/* Experience & Skills Section */}
      <section id="experience" className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center mb-4">Experience & Skills</h2>

          {/* Skills Progress Bars (Score Slider) */}
          
          {/* Skills & Experience Slider (Carousel) */}
          <div id="skillsSlider" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Experience Slide */}
              <div className="carousel-item active">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center">
                    <h3>1 Year of Experience</h3>
                    <p>I have 1 year of experience working as a web and app developer, focusing on front-end development and mobile app creation.</p>
                  </div>
                </div>
              </div>

              {/* Skill Slide 1: HTML, CSS, Bootstrap */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center">
                    <h3>Strong in HTML, CSS & Bootstrap</h3>
                    <p>Proficient in HTML, CSS, and Bootstrap, creating responsive, accessible, and visually appealing websites.</p>
                  </div>
                </div>
              </div>

              {/* Skill Slide 2: Android Development */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center">
                    <h3>Android App Development</h3>
                    <p>Experienced in Android app development, including building scalable and user-friendly mobile applications.</p>
                  </div>
                </div>
              </div>

              {/* Skill Slide 3: JavaScript */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center">
                    <h3>JavaScript Knowledge</h3>
                    <p>Good knowledge of JavaScript, enabling dynamic interactions and improved user experiences on websites and apps.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#skillsSlider" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#skillsSlider" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center mb-4">Services</h2>
          <div className="row text-center g-4">
            {[{ icon: FaLaptopCode, title: 'Web Development', text: 'Modern and responsive websites built using Odoo, .NET, and more.' },
              { icon: FaMobileAlt, title: 'App Development', text: 'Scalable Android applications tailored to your business.' },
              { icon: FaCogs, title: 'Odoo Services', text: 'Custom Odoo solutions for your business.' }].map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="p-4 border rounded shadow-lg bg-white h-100 service-box">
                  <service.icon size={50} className="mb-3 text-primary" />
                  <h5 className="mt-3">{service.title}</h5>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-5 bg-light text-dark border-top">
        <div className="container d-md-flex align-items-center flex-column flex-md-row">
          <img
              src="profile.jpg" 
              alt="Yash Thakkar"
              className="rounded-circle shadow-lg mb-4 mb-md-0 me-md-5 about-img"
              style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
            />
            <div className="text-center text-md-start">
              <h2>About Me</h2>
              <p>
                I’m Yash Thakkar, a freelance developer passionate about creating seamless digital experiences with modern designs.
                I specialize in Odoo, .NET, and Android app development, delivering top-quality solutions for businesses.
              </p>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-dark text-light border-top">
        <div className="container text-center">
          <h2>Contact Me</h2>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="mailto:yashthakkar0603@gmail.com?subject=Inquiry&body=Hello Yash, I am interested in your services!" className="btn btn-primary p-3"> <FaEnvelope /> Email Me</a>
            <a href="tel:+919106433706" className="btn btn-success p-3"><FaPhone /> Call Me</a>
            <a href="https://www.google.com/maps/place/Bhuj,+Gujarat" target="_blank" className="btn btn-danger p-3"><FaMapMarkerAlt /> Location (Bhuj)</a>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-5 bg-secondary text-light border-top">
        <div className="container w-50">
          <h2 className="text-center mb-4">Feedback</h2>
          <form>
            <div className="mb-3">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="your.email@example.com" />
            </div>
            <div className="mb-3">
              <label>Message</label>
              <textarea className="form-control" rows="4" placeholder="Your feedback"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Feedback</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-center text-light py-3">
        <p>© 2025 Yash Thakkar. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
