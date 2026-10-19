import { Link, NavLink } from "react-router-dom";
import "./About.css";

export default function About() {
  const values = [
    {
      icon: "bi-droplet",
      title: "Water Awareness",
      text: "We encourage thoughtful water use and irrigation planning.",
    },
    {
      icon: "bi-tree",
      title: "Sustainable Growing",
      text: "We support practical watering choices for farms and gardens.",
    },
    {
      icon: "bi-people",
      title: "Customer Guidance",
      text: "We help customers understand different irrigation options.",
    },
  ];

  return (
    <div className="about-page">
      <nav className="navbar navbar-expand-lg about-navbar">
        <div className="container">
          <Link className="navbar-brand about-brand" to="/">
            <i className="bi bi-droplet-fill"></i>
            <span>AquaGrow<small>IRRIGATION SYSTEMS</small></span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#aboutNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="aboutNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><NavLink end to="/" className="nav-link">Home</NavLink></li>
              <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
              <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              <li className="nav-item ms-lg-3">
                <Link to="/contact" className="about-nav-button">Get a Quote ↗</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="about-hero">
        <div className="container">
          <span>GET TO KNOW AQUAGROW</span>
          <h1>Growing a Greener<br /><strong>Tomorrow.</strong></h1>
          <p>
            We believe thoughtful irrigation planning can help people manage
            water and care for the places where they grow.
          </p>
        </div>
      </header>

      <section className="about-story">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1100&q=85"
                alt="Fresh green plants growing in a field"
                className="about-story-image"
              />
            </div>

            <div className="col-lg-6">
              <span className="about-label">OUR STORY</span>
              <h2>
                Helping Every Drop
                <br />
                <strong>Make a Difference.</strong>
              </h2>

              <p>
                AquaGrow is an irrigation-focused brand built around a simple
                idea: watering should suit the needs of the land and plants.
              </p>

              <p>
                From drip irrigation to sprinklers and smart controllers,
                different systems serve different purposes. Our goal is to
                help customers understand these options and plan their next
                steps with confidence.
              </p>

              <Link to="/services" className="about-button">
                Explore Our Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <article className="about-mission-card">
                <div className="about-mission-icon">
                  <i className="bi bi-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To make irrigation options easier to understand and help
                  customers consider systems that suit their water needs,
                  plants and spaces.
                </p>
              </article>
            </div>

            <div className="col-md-6">
              <article className="about-mission-card">
                <div className="about-mission-icon">
                  <i className="bi bi-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To encourage more thoughtful watering practices and
                  contribute to greener, well-managed growing environments.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-heading">
            <span>WHAT MATTERS TO US</span>
            <h2>Our Core Values</h2>
            <p>The principles behind our approach to irrigation.</p>
          </div>

          <div className="row g-4">
            {values.map((value) => (
              <div className="col-md-4" key={value.title}>
                <article className="about-value-card">
                  <i className={`bi ${value.icon}`}></i>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Let's plan a better way to water.</h2>
          <p>Have an irrigation project in mind? We'd like to hear about it.</p>
          <Link to="/contact" className="about-cta-button">
            Talk to AquaGrow →
          </Link>
        </div>
      </section>

      <footer className="about-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <Link className="about-brand about-footer-brand" to="/">
                <i className="bi bi-droplet-fill"></i>
                <span>AquaGrow<small>IRRIGATION SYSTEMS</small></span>
              </Link>
              <p>Helping customers explore thoughtful irrigation solutions.</p>
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
          <div className="about-footer-bottom">
            © {new Date().getFullYear()} AquaGrow Irrigation Systems
          </div>
        </div>
      </footer>
    </div>
  );
}