import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ServiceCard from "../ServiceCard/ServiceCard";
import Grid from "@mui/material/Grid2";
import WOW from "wow.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const HomePageComponet = ({ addToCart }) => {
  const navigate = useNavigate();
  const pageSlug = "Home_page";
  const [title, setTitle] = useState("No title");
  const [headers, setHeaders] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});

  // Fetch the page data from WordPress REST API by slug
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`https://sezavu.com/wp-json/wp/v2/pages`);
        const data = await response.json();

        console.log("Fetched data:", data);
        if (data && data.length > 0) {
          // Assuming the main content is in `content.rendered` or adjust accordingly
          const mainContent = data[0]?.content?.rendered || "";

          // Use a parser to extract headers and paragraphs from HTML
          const parser = new DOMParser();
          const doc = parser.parseFromString(mainContent, "text/html");

          // Extract headers
          const newHeaders = Array.from(
            doc.querySelectorAll("h1, h2, h3, h4, h5, h6")
          ).map((header) => ({
            level: header.tagName.toLowerCase().slice(1), // Get the level of the header (h1, h2, etc.)
            text: header.textContent,
          }));

          // Extract paragraphs
          const newParagraphs = Array.from(doc.querySelectorAll("p")).map(
            (paragraph) => paragraph.textContent
          );

          // Update state variables
          setTitle(data[0]?.title?.rendered || "No title");
          setHeaders(newHeaders);
          setParagraphs(newParagraphs);
        }
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };

    fetchPageData();
  }, [pageSlug]);

  //Handle Add To cart
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
  };
  //Navigate to CartPage
  const handleGoToCart = () => {
    navigate("/CartPage");
  };

  // const updateQuantity = (id, newQuantity) => {
  //   setCartItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
  //     )
  //   );
  // };

  useEffect(() => {
    new WOW().init();
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true, // Shows dots navigation
    infinite: true, // Infinite scroll
    speed: 500, // Animation speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per click
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  //Service card Images
  const services = [
    {
      description: "Sanosan Shampo",
      image: "img/Sanosanshampo.webp",
      navigateTo: "/Services_Be_Extraordinaire",
    },
    {
      description: "Baby Pilow",
      image: "img/babypilow.jpeg",
      navigateTo: "/Services_Terraclan",
    },
    {
      description: "Ecomama",
      image: "img/ecomama.webp",
      navigateTo: "/Services_Beearth",
    },
    {
      description: "Baby Dress",
      image: "img/babydress.jpg",
      navigateTo: "/Satvik_hangout",
    },
    {
      description: "Sbmayur Oil",
      image: "img/sbmayuroil.webp",
      navigateTo: "/Satvik_hangout",
    },
    {
      title: "Service 6",
      description: "DasaPUshadi",
      image: "img/Mother-Child.webp",
      navigateTo: "/Satvik_hangout",
    },
    {
      title: "Service 7",
      description: "Sbmayur Oil",
      image: "img/sbmayuroil.webp",
      navigateTo: "/Satvik_hangout",
    },
  ];

  //Product Images,price,name
  const products = [
    {
      id: 1,
      image: "img/sbmayuroil.webp",
      name: "Submayur Oil",
      price: "₹19.99",
      description: "Helps protect against infections with Vitamin C",
    },
    {
      id: 2,
      image: "img/jar.jpg",
      name: "Jar Mockup",
      price: "₹214.99",
      description: "Vitamin D & Calcium for healthy development",
    },
    {
      id: 3,
      image: "img/ecomama.webp",
      name: "Ecomama",
      price: "₹129.99",
      description: "No artificial colors, preservatives, or allergens",
    },
    {
      id: 4,
      image: "img/Sanosanshampo.webp",
      name: "Samosans Shampo",
      price: "₹34.99",
      description: "DHA & Vitamin B-complex for cognitive growth",
    },
    {
      id: 5,
      image: "img/Mother-Child.webp",
      name: "BaByShine",
      price: "₹156.99",
      description: "Helps protect against infections with Vitamin C",
    },
    {
      id: 6,
      image: "img/jar1.jpg",
      name: "Baby Mockup",
      price: "₹204.99",
      description: "Vitamin D & Calcium for healthy development",
    },
    {
      id: 7,
      image: "img/babyfood.jpg",
      name: "Spout Pouch",
      price: "₹292.99",
      description: "No artificial colors, preservatives, or allergens",
    },
    {
      id: 8,
      image: "img/mas pharmacy.jpg",
      name: "Cough Syrup",
      price: "₹34.99",
      description: "DHA & Vitamin B-complex for cognitive growth",
    },
    {
      id: 9,
      image: "img/jhonsonbaby.jpg",
      name: "Jhonson Baby",
      price: "₹139.99",
      description: "Helps protect against infections with Vitamin C",
    },
    {
      id: 10,
      image: "img/cetaphil.webp",
      name: "Cetaphil",
      price: "₹234.99",
      description: "Vitamin D & Calcium for healthy development",
    },
    {
      id: 11,
      image: "img/joil.jpg",
      name: "Jhonson Oil",
      price: "₹29.99",
      description: "No artificial colors, preservatives, or allergens",
    },
    {
      id: 12,
      image: "img/pampers.jpg",
      name: "Pampers",
      price: "₹234.99",
      description: "DHA & Vitamin B-complex for cognitive growth",
    },
    {
      id: 13,
      image: "img/cerelac.jpg",
      name: "Cerelac Mix",
      price: "₹69.99",
      description: "Helps protect against infections with Vitamin C",
    },
    {
      id: 14,
      image: "img/diaperrunsh.webp",
      name: "Diaoper Rush",
      price: "₹94.99",
      description: "Vitamin D & Calcium for healthy development",
    },
    {
      id: 15,
      image: "img/manna.webp",
      name: "Mana Health Mix",
      price: "₹39.99",
      description: "No artificial colors, preservatives, or allergens",
    },
    {
      id: 16,
      image: "img/gerber.jpg",
      name: "Gerber",
      price: "₹34.99",
      description: "DHA & Vitamin B-complex for cognitive growth",
    },
  ];

  return (
    <div>
      {/* carousel Images */}
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ height: "60vh" }}
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ height: "100%" }}
        >
          <div className="carousel-inner" style={{ height: "100%" }}>
            <div className="carousel-item active" style={{ height: "100%" }}>
              <img
                className="w-100 h-100"
                src="img/slider/hero1.png"
                alt="Image"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                      <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                        {headers[1]?.text}
                      </h5>
                      <h1 className="display-2 text-light mb-3 animated slideInDown">
                        {headers[0]?.text}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{ height: "100%" }}>
              <img
                className="w-100 h-100"
                src="img/slider/hero2.png"
                alt="Image"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                      <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                        {headers[1]?.text}
                      </h5>
                      <h1 className="display-2 text-light mb-3 animated slideInDown">
                        {headers[0]?.text}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* carousel Next and Back Button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes scrollHorizontal {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      {/* Horizontal Scroll Container */}
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
          margin: "20px 0",
        }}
      >
        {/* Scrollable Content */}
        <div
          style={{
            display: "flex",
            animation: "scrollHorizontal 25s linear infinite",
            width: "max-content",
          }}
        >
          {/* Render the ServiceCards */}
          {services.map((service, index) => (
            <div key={index} style={{ margin: "0 10px" }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                navigateTo={service.navigateTo}
              />
            </div>
          ))}
          {/* Duplicate the cards for seamless looping */}
          {services.map((service, index) => (
            <div key={`duplicate-${index}`} style={{ margin: "0 10px" }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                navigateTo={service.navigateTo}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Cart */}
      <link rel="stylesheet" href="news/tailwind.min.css" />
      <link rel="stylesheet" href="news/style.css" />
      <div style={{ background: "#e0e5e0" }}>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2">
                Featured products
              </h6>
              <h1 className="display-6 mb-0">Baby &amp; Care</h1>
            </div>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded overflow-hidden shadow-lg wow fadeInRight"
                >
                  <div className="h-64 flex items-center justify-center bg-gray-100">
                    <img
                      className="w-full h-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="px-6 py-4 bg-white flex flex-col flex-grow">
                    <a
                      href="#!"
                      className="font-semibold text-lg inline-block hover:text-indigo-600 transition"
                    >
                      {product.name}
                    </a>
                    <p className="text-gray-500 text-sm">
                      {product.description}
                    </p>
                    <button
                      className="mt-auto w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                      onClick={() =>
                        addedToCart[product.id]
                          ? handleGoToCart()
                          : handleAddToCart(product)
                      }
                    >
                      {addedToCart[product.id] ? "Go to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponet;
