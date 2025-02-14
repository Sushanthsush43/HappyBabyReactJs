import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavbarComponent = ({ activeLink, setActiveLink }) => {
  const location = useLocation();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isHomePage, setIsHomePage] = useState(true);

  const handleLinkClick = (linkName) => {
    // Use the Bootstrap JavaScript API to toggle the collapse
    if (window.innerWidth < 992) {
      const navbarCollapseElement = document.getElementById("navbarCollapse");
      if (navbarCollapseElement) {
        const collapseInstance = new window.bootstrap.Collapse(
          navbarCollapseElement
        );
        collapseInstance.hide(); // Collapses the navbar
      }
    }
    // Set the active link
    setActiveLink(linkName);
  };

  const formatDateTime = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return `${date.toLocaleDateString(
      undefined,
      options
    )} ${date.toLocaleTimeString()}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  useEffect(() => {
    if (location.pathname === "/Home_Page") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

  const dropdownItemStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#000", // Default color
    padding: "10px 15px", // Padding for better click area
  };

  const hoverStyle = {
    color: "#bd0505", // Color on hover
    // backgroundColor: 'rgba(189, 5, 5, 0.1)', // Optional background color on hover
  };

  return (
    <>
      {/* {
                !isHomePage ? ( */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">
            {" "}
            <img src="img/logo.png" width="200" alt="Logo" />
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-3 py-lg-0">
            <Link
              to="/Home_Page"
              className={`nav-item nav-link ${
                activeLink === "Home_Page" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Home_Page")}
            >
              Home
            </Link>

            <Link
              to="/CartPage"
              className={`nav-item nav-link ${
                activeLink === "CartPage" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("CartPage")}
            >
              Cart
            </Link>
            <Link
              to="/About_Us"
              className={`nav-item nav-link ${
                activeLink === "About_Us" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("About_Us")}
            >
              About Us
            </Link>
            {/* <div className="nav-item dropdown"> */}
            {/* <a
                                href="#"
                                className={`nav-item nav-link dropdown-toggle ${['Services_Be_Extraordinaire', 'Services_Terraclan', 'Services_Beearth'].includes(activeLink) ? 'active' : ''}`}
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Services
                            </a> */}
            {/* <div className="dropdown-menu bg-light m-0 custom-dropdown-menu">
                                <Link
                                    to="/Services_Be_Extraordinaire"
                                    className="dropdown-item"
                                    onClick={() => handleLinkClick('Services_Be_Extraordinaire')}
                                    style={dropdownItemStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, { color: '#000', backgroundColor: 'transparent' })}
                                >
                                    <i className="fas fa-star me-2"></i> {/* Icon for Be Extraordinaire */}
            {/* <span>Be Extraordinaire</span> */}
            {/* </Link>
                                <Link
                                    to="/Services_Terraclan"
                                    className="dropdown-item"
                                    onClick={() => handleLinkClick('Services_Terraclan')}
                                    style={dropdownItemStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)} */}
            {/* onMouseLeave={(e) => Object.assign(e.currentTarget.style, { color: '#000', backgroundColor: 'transparent' })}
                                >
                                    <i className="fas fa-leaf me-2"></i> {/* Icon for Terraclan */}
            {/* <span>Terraclan</span>
                                </Link>
                                <Link */}
            {/* to="/Services_Beearth"
                                    className="dropdown-item"
                                    onClick={() => handleLinkClick('Services_Beearth')}
                                    style={dropdownItemStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)} */}
            {/* onMouseLeave={(e) => Object.assign(e.currentTarget.style, { color: '#000', backgroundColor: 'transparent' })}
                                } }
                                //     <i className="fas fa-globe me-2"></i> {/* Icon for Be Earth */}
            {/* <span>Be Earth</span> */}
            {/* </Link> */}
            {/* <Link
                                    to="/Satvik_hangout"
                                    className="dropdown-item"
                                    onClick={() => handleLinkClick('Satvik_hangout')}
                                    // style={dropdownItemStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, { color: '#000', backgroundColor: 'transparent' })}
                                >
                                    <i className="fas fa-users rotating-icon"></i>
                                    {/* Icon for Be Earth */}

            {/* <span>Satvik hangout</span> */}
            {/* </Link> */}

            {/* </div>
                        </div> */}
            {/* <Link
                            to="/InteractiveSustainability"
                            className={`nav-item nav-link ${activeLink === 'InteractiveSustainability' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('InteractiveSustainability')}
                        >
                            Impact
                        </Link> */}
            {/* <Link
                            to="/Portfolio"
                            className={`nav-item nav-link ${activeLink === 'Portfolio' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('Portfolio')}
                        >
                            Portfolio
                        </Link> */}
            {/* <Link to="/Blog"
                            className={`nav-item nav-link ${activeLink === 'Blog' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('Blog')}
                        > */}
            {/* Blog
                        </Link> */}
            {/* <Link to="Career_Page"
                            className={`nav-item nav-link ${activeLink === 'Career_Page' ? 'active' : ''}`}

                            onClick={() => handleLinkClick('Career_Page')}
                        >
                            Career
                        </Link> */}

            <Link
              to="/Contact"
              className={`nav-item nav-link ${
                activeLink === "Contact" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Contact")}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      {/* ) : (
                    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
                        <div className="col-md-5" style={{ textAlign: "right" }}>
                            <a href="#" onClick={openNav}>
                                <img src="menu/menuicon.png" width="30" alt="menu icon" />
                            </a>
                        </div>
                        <div className="col-md-7" align="center">
                            <Link to="/" className="navbar-brand d-flex align-items-center">
                                <h1 className="m-0"> <img src="img/sezavo_logo.png" width="200" alt="Logo" /></h1>
                            </Link>
                        </div>
                    </nav>
                )
            }
            <link rel="stylesheet" href="menu/style.css" />
            <div id="myNav" className="overlay" align="right">
                <a href="#" className="closebtn" onClick={(e) => { e.preventDefault(); closeNav(); }}>
                    &times;
                </a>
                <div className="overlay-content">
                    <Link to="/AboutComponet" onClick={() => closeNav()}>About</Link>
                    <Link to="/Service1" onClick={() => closeNav()}>Services</Link>
                    <Link to="/InteractiveSustainability" onClick={() => closeNav()}>Interactive Sustainability</Link>
                    <Link to="/Portfolio" onClick={() => closeNav()}>Portfolio</Link>
                    <Link to="/Blog" onClick={() => closeNav()}>Blog</Link>
                    <Link to="#" onClick={() => closeNav()}>Features</Link>
                    <Link to="/Contact" onClick={() => closeNav()}>Contact</Link>
                </div>

            </div> */}
      <script src="menu/script.js"></script>
    </>
  );
};

export default NavbarComponent;
