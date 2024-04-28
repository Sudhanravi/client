import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [refreshPage, setRefreshPage] = useState(false);

  if (refreshPage) {
    // Reload the page when refreshPage is true
    window.location.reload();
    // Reset refreshPage state to false after reloading
    setRefreshPage(false);
  }

  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0">
            <img className="img" src="/img/dynamicFixLogo.jpg" /> Dynamic Fix
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link
              to="/"
              className={`nav-item nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={() => setRefreshPage(true)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-item nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Link>
            <Link to="/services" className="nav-item nav-link">
              Services
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Blog
              </Link>
              <div className="dropdown-menu m-0">
                <Link
                  to="/blog"
                  className={`dropdown-item ${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                >
                  Blog Grid
                </Link>
                <Link
                  to="/detail"
                  className={`dropdown-item ${
                    location.pathname === "/detail" ? "active" : ""
                  }`}
                >
                  Blog Detail
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link
                  to="/price"
                  className={`dropdown-item ${
                    location.pathname === "/price" ? "active" : ""
                  }`}
                >
                  Pricing Plan
                </Link>
                <Link
                  to="/feature"
                  className={`dropdown-item ${
                    location.pathname === "" ? "active" : ""
                  }`}
                >
                  Our features
                </Link>
                <Link
                  to="/team"
                  className={`dropdown-item ${
                    location.pathname === "" ? "active" : ""
                  }`}
                >
                  Team Members
                </Link>
                <Link
                  to="/testimonial"
                  className={`dropdown-item ${
                    location.pathname === "" ? "active" : ""
                  }`}
                >
                  Testimonial
                </Link>
                <Link
                  to="/quote"
                  className={`dropdown-item ${
                    location.pathname === "" ? "active" : ""
                  }`}
                >
                  Free Quote
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className={`nav-item nav-link ${
                location.pathname === "" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        <button
          type="button"
          className="btn text-primary ms-3"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
        >
          <i className="fa fa-search"></i>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
