import { Link, NavLink } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const services = [
    {
      icon: "bi-droplet-half",
      title: "Drip Irrigation",
      text: "Deliver water directly to plant roots while reducing water waste.",
    },
    {
      icon: "bi-moisture",
      title: "Sprinkler Systems",
      text: "Water fields, gardens and lawns with an efficient sprinkler system.",
    },
    {
      icon: "bi-cpu",
      title: "Smart Irrigation",
      text: "Manage watering schedules with smart controllers and timers.",
    },
  ];

  return (
    <div className="home-page">
      <nav className="navbar navbar-expand-lg home-navbar">
        <div className="container">
          <Link className="navbar-brand home-brand" to="/">
            <i className="bi bi-droplet-fill"></i>
            <span>
              AquaGrow
              <small>IRRIGATION SYSTEMS</small>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#homeNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="homeNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <NavLink end to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
              <li className="nav-item ms-lg-3">
                <Link to="/contact" className="home-nav-button">
                  Get a Quote ↗
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="home-hero">
        <div className="container">
          <span className="home-eyebrow">
            SMART WATER. HEALTHY CROPS.
          </span>

          <h1>
            Every Drop
            <br />
            <span>Grows More.</span>
          </h1>

          <p>
            Smarter irrigation for greener farms and healthier gardens.
            Save water and support plant growth with AquaGrow irrigation
            solutions.
          </p>

          <div className="home-hero-actions">
            <Link to="/services" className="home-primary-button">
              Explore Solutions <i className="bi bi-arrow-right"></i>
            </Link>

            <Link to="/about" className="home-text-button">
              Discover Our Story ↗
            </Link>
          </div>

          <div className="home-benefits">
            <span>✓ Efficient water use</span>
            <span>✓ Farm-friendly solutions</span>
            <span>✓ Helpful guidance</span>
          </div>
        </div>
      </header>

      <section className="home-services section-space">
        <div className="container">
          <div className="home-section-heading">
            <span>WHAT WE DO</span>
            <h2>
              Irrigation Solutions
              <br />
              <strong>Made for Growth.</strong>
            </h2>
            <p>
              Discover practical watering systems for farms, gardens and
              landscapes.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div className="col-md-4" key={service.title}>
                <article className="home-service-card">
                  <div className="home-service-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link to="/services">Learn more →</Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-about-preview">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                className="home-about-image"
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85"
                alt="Green agricultural field"
              />
            </div>

            <div className="col-lg-6">
              <span className="home-label">WHY AQUAGROW</span>
              <h2>
                Better Irrigation.
                <br />
                <strong>Better Tomorrow.</strong>
              </h2>
              <p>
                Every farm and garden has different watering needs. We help
                you explore suitable irrigation solutions for your space.
              </p>
              <ul className="home-check-list">
                <li>Solutions for different spaces</li>
                <li>Practical water management</li>
                <li>Guidance for choosing a system</li>
              </ul>
              <Link to="/about" className="home-primary-button">
                About AquaGrow →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <div className="home-cta-inner">
            <div>
              <span>LET'S GROW TOGETHER</span>
              <h2>Ready to make every drop count?</h2>
              <p>Tell us about your farm, garden or irrigation project.</p>
            </div>
            <Link to="/contact" className="home-cta-button">
              Contact Us ↗
            </Link>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <Link className="home-brand footer-brand" to="/">
                <i className="bi bi-droplet-fill"></i>
                <span>
                  AquaGrow
                  <small>IRRIGATION SYSTEMS</small>
                </span>
              </Link>
              <p className="home-footer-description">
                Smart irrigation for greener farms and a more sustainable
                future.
              </p>
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

          <div className="home-footer-bottom">
            © {new Date().getFullYear()} AquaGrow Irrigation Systems
          </div>
        </div>
      </footer>
    </div>
  );
}