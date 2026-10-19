import { Link, NavLink } from "react-router-dom";
import "./Services.css";

export default function Services() {
  const services = [
    {
      icon: "bi-droplet-half",
      title: "Drip Irrigation",
      text: "Supply water near plant roots through drip lines and emitters. Suitable for vegetable gardens, orchards and many agricultural crops.",
      points: ["Targeted watering", "Flexible drip layouts", "Suitable for rows of crops"],
    },
    {
      icon: "bi-moisture",
      title: "Sprinkler Irrigation",
      text: "Distribute water across an area using sprinklers. Useful for lawns, gardens, fields and suitable crop types.",
      points: ["Wide area coverage", "Different sprinkler options", "Adjustable layouts"],
    },
    {
      icon: "bi-cpu",
      title: "Smart Irrigation",
      text: "Manage watering with timers, controllers and compatible sensors to support more consistent watering schedules.",
      points: ["Scheduled watering", "Controller options", "Sensor-compatible systems"],
    },
    {
      icon: "bi-water",
      title: "Water Pump Systems",
      text: "Explore suitable pumps and system components based on your water source, required flow and operating pressure.",
      points: ["Water source assessment", "Flow and pressure planning", "System component guidance"],
    },
    {
      icon: "bi-tools",
      title: "Installation Planning",
      text: "Plan irrigation layouts around the site, crop spacing, water supply and practical maintenance requirements.",
      points: ["Site requirements", "Layout planning", "Maintenance considerations"],
    },
    {
      icon: "bi-clipboard-check",
      title: "System Consultation",
      text: "Discuss your irrigation goals and compare possible systems before choosing an option for your property.",
      points: ["Needs assessment", "Solution comparison", "Planning guidance"],
    },
  ];

  return (
    <div className="services-page">
      <nav className="navbar navbar-expand-lg services-navbar">
        <div className="container">
          <Link className="navbar-brand services-brand" to="/">
            <i className="bi bi-droplet-fill"></i>
            <span>AquaGrow<small>IRRIGATION SYSTEMS</small></span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#servicesNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="servicesNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><NavLink end to="/" className="nav-link">Home</NavLink></li>
              <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
              <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              <li className="nav-item ms-lg-3">
                <Link to="/contact" className="services-nav-button">Get a Quote ↗</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="services-hero">
        <div className="container">
          <span>OUR IRRIGATION SOLUTIONS</span>
          <h1>Water Smarter.<br /><strong>Grow Better.</strong></h1>
          <p>
            Explore irrigation options designed around your crops, landscape
            and water supply.
          </p>
          <Link to="/contact" className="services-button">Discuss Your Project →</Link>
        </div>
      </header>

      <section className="services-list-section">
        <div className="container">
          <div className="services-heading">
            <span>WHAT WE OFFER</span>
            <h2>Solutions for Every Growing Space</h2>
            <p>
              Choose a system based on your site conditions, water needs and
              maintenance preferences.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={service.title}>
                <article className="services-card">
                  <div className="services-card-top">
                    <div className="services-icon">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <span className="services-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <i className="bi bi-check-circle-fill"></i> {point}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">Ask About This Service →</Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="container">
          <div className="services-heading">
            <span>HOW IT WORKS</span>
            <h2>A Simple Planning Process</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="services-step">
                <span>01</span>
                <h3>Understand Your Needs</h3>
                <p>Discuss your crops, site, water source and goals.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-step">
                <span>02</span>
                <h3>Explore Options</h3>
                <p>Compare suitable systems and layout requirements.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-step">
                <span>03</span>
                <h3>Plan the Next Steps</h3>
                <p>Review components, installation needs and upkeep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Not sure which system you need?</h2>
          <p>Tell us about your project and explore your options.</p>
          <Link to="/contact" className="services-button services-button-light">
            Contact AquaGrow →
          </Link>
        </div>
      </section>

      <footer className="services-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <Link className="services-brand services-footer-brand" to="/">
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
          <div className="services-footer-bottom">
            © {new Date().getFullYear()} AquaGrow Irrigation Systems
          </div>
        </div>
      </footer>
    </div>
  );
}