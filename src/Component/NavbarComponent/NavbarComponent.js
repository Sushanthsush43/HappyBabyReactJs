import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavbarComponent = ({ activeLink, setActiveLink }) => {
  const location = useLocation();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isHomePage, setIsHomePage] = useState(true);

  const handleLinkClick = (linkName) => {
    if (window.innerWidth < 992) {
      const navbarCollapseElement = document.getElementById("navbarCollapse");
      if (navbarCollapseElement) {
        const collapseInstance = new window.bootstrap.Collapse(
          navbarCollapseElement
        );
        collapseInstance.hide();
      }
    }
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
    color: "#000",
    padding: "10px 15px",
  };

  const hoverStyle = {
    color: "#bd0505",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">
            {" "}
            <img src="img/logo.png" width="200" alt="Logo" />
          </h1>
        </Link>
        <div className="mx-auto d-flex align-items-center w-75">
          <div className="input-group rounded bg-light px-13 py-2 w-100">
            <span className="input-group-text border-0 bg-light">
              <i className="fas fa-search text-muted"></i>
            </span>
            <input
              type="text"
              className="form-control border-0 bg-light"
              placeholder="Search for products, brands and more"
              style={{
                outline: "none",
                boxShadow: "none",
                borderColor: "transparent",
              }}
            />
          </div>
        </div>
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
            {/* <Link
              to="/Home_Page"
              className={`nav-item nav-link ${
                activeLink === "Home_Page" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Home_Page")}
            >
              Home
            </Link> */}
            <Link
              to="/DemoProductPage"
              className={`nav-item nav-link d-flex align-items-center ${
                activeLink === "DemoProductPage" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("DemoProductPage")}
            >
              {/* <i className="fas fa-baby me-2 fs-4"></i> */}
              <span>Demo</span>
            </Link>
            <Link
              to="/Favorites"
              className={`nav-item nav-link d-flex align-items-center ${
                activeLink === "Favorites" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("FavoritesPage")}
            >
              {/* <i className="fas fa-heart me-2 fs-4"></i> */}
              <span>Favorites</span>
            </Link>
            {/* <Link
              to="/Login"
              className={`nav-item nav-link d-flex align-items-center ${
                activeLink === "Login" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Login")}
            >
              <i className="fas fa-user me-2 fs-4"></i>
              {/* <span>Login</span> */}
            {/* </Link> */} 
            <Link
              to="/CartPage"
              className={`nav-item nav-link d-flex align-items-center ${
                activeLink === "CartPage" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("CartPage")}
            >
              <i className="bi bi-cart3 me-2 fs-4"></i>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </nav>
      <script src="menu/script.js"></script>
    </>
  );
};

export default NavbarComponent;