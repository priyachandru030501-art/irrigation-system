import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Drip Irrigation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="contact-page">
      <nav className="navbar navbar-expand-lg contact-navbar">
        <div className="container">
          <Link className="navbar-brand contact-brand" to="/">
            <i className="bi bi-droplet-fill"></i>
            <span>AquaGrow<small>IRRIGATION SYSTEMS</small></span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#contactNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="contactNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><NavLink end to="/" className="nav-link">Home</NavLink></li>
              <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
              <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              <li className="nav-item ms-lg-3">
                <Link to="/contact" className="contact-nav-button">Get a Quote ↗</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="contact-hero">
        <div className="container">
          <span>WE'D LOVE TO HEAR FROM YOU</span>
          <h1>Let's Talk About<br /><strong>Your Project.</strong></h1>
          <p>
            Have questions about irrigation systems? Send us your requirements
            and explore the options that may suit your space.
          </p>
        </div>
      </header>

      <section className="contact-main">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="contact-label">GET IN TOUCH</span>
              <h2>Let's find the right watering solution.</h2>
              <p className="contact-intro">
                Share a few details about your farm, garden or irrigation
                project. Use the form to describe what you need.
              </p>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>Send your enquiry through the contact form.</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bi bi-droplet"></i>
                </div>
                <div>
                  <h3>Irrigation Support</h3>
                  <p>Ask about drip, sprinkler or smart irrigation systems.</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <div>
                  <h3>Project Enquiries</h3>
                  <p>Include your location and project requirements in your message.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Us a Message</h3>
                <p>Fill in the details below.</p>

                {submitted && (
                  <div className="contact-success" role="status">
                    Thank you, {form.name}! Your details have been entered.
                    This demo form does not send messages to a server.
                  </div>
                )}

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="contactName">Full Name *</label>
                    <input
                      id="contactName"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contactEmail">Email Address *</label>
                    <input
                      id="contactEmail"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contactPhone">Phone Number</label>
                    <input
                      id="contactPhone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contactService">Service Interested In</label>
                    <select
                      id="contactService"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option>Drip Irrigation</option>
                      <option>Sprinkler Irrigation</option>
                      <option>Smart Irrigation</option>
                      <option>Water Pump Systems</option>
                      <option>Installation Planning</option>
                      <option>System Consultation</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="contactMessage">Project Details *</label>
                    <textarea
                      id="contactMessage"
                      name="message"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="contact-submit-button">
                      Submit Enquiry <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="container">
          <h2>Every growing project starts with a conversation.</h2>
          <p>Explore our irrigation services to find an option for your needs.</p>
          <Link to="/services" className="contact-bottom-button">
            View Our Services →
          </Link>
        </div>
      </section>

      <footer className="contact-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <Link className="contact-brand contact-footer-brand" to="/">
                <i className="bi bi-droplet-fill"></i>
                <span>AquaGrow<small>IRRIGATION SYSTEMS</small></span>
              </Link>
              <p>Practical irrigation options for farms, gardens and landscapes.</p>
            </div>

            <div className="col-6 col-md-3">
              <h4>Explore</h4>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
            </div>

            <div className="col-6 col-md-3">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="contact-footer-bottom">
            © {new Date().getFullYear()} AquaGrow Irrigation Systems
          </div>
        </div>
      </footer>
    </div>
  );
}