import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ServiceCard from "../ServiceCard/ServiceCard";
import Grid from "@mui/material/Grid2";
import WOW from "wow.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderBarFilter from "../SliderBarFilterHomePage/SliderBarFilterHomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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

  // State to track favorite status for each product
  const [favorites, setFavorites] = useState({}); // State to track favorites

  // Function to toggle favorite status
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId], // Toggle favorite status
    }));
  };

  //Service card Images
  const services = [
    {
      title: "Sanosan Shampoo",
      description: "A gentle shampoo for babies.",
      image: "img/Sanosanshampo.webp",
      navigateTo: "/Services_Be_Extraordinaire",
    },
    {
      title: "Baby Pillow",
      description: "Soft and comfortable baby pillow.",
      image: "img/babypilow.jpeg",
      navigateTo: "/Services_Terraclan",
    },
    {
      title: "Ecomama",
      description: "Eco-friendly baby products.",
      image: "img/ecomama.webp",
      navigateTo: "/Services_Beearth",
    },
    {
      title: "Baby Dress",
      description: "Stylish and comfy baby dresses.",
      image: "img/babydress.jpg",
      navigateTo: "/Satvik_hangout",
    },
    {
      title: "Sbmayur Oil",
      description: "Ayurvedic baby massage oil.",
      image: "img/sbmayuroil.webp",
      navigateTo: "/Satvik_hangout",
    },
    {
      title: "Dasa Pushadi",
      description: "Herbal oil for baby care.",
      image: "img/Mother-Child.webp",
      navigateTo: "/Satvik_hangout",
    },
    {
      title: "Sbmayur Oil",
      description: "Natural baby massage oil.",
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
      description: "Helps protect infections",
    },
    {
      id: 2,
      image: "img/jar.jpg",
      name: "Jar Mockup",
      price: "₹214.99",
      description: "Vitamin D & Calcium",
    },
    {
      id: 3,
      image: "img/ecomama.webp",
      name: "Ecomama",
      price: "₹129.99",
      description: "No artificial colors, preservatives",
    },
    {
      id: 4,
      image: "img/Sanosanshampo.webp",
      name: "Sanosan Shampoo",
      price: "₹34.99",
      description: "DHA & Vitamin B-complex",
    },
    {
      id: 5,
      image: "img/Mother-Child.webp",
      name: "BaByShine",
      price: "₹156.99",
      description: "Helps protect infections",
    },
    {
      id: 6,
      image: "img/jar1.jpg",
      name: "Baby Mockup",
      price: "₹204.99",
      description: "Vitamin D & Calcium",
    },
    {
      id: 7,
      image: "img/babyfood.jpg",
      name: "Spout Pouch",
      price: "₹292.99",
      description: "No artificial colors, preservatives",
    },
    {
      id: 8,
      image: "img/mas pharmacy.jpg",
      name: "Cough Syrup",
      price: "₹34.99",
      description: "DHA & Vitamin B-complex",
    },
    {
      id: 9,
      image: "img/jhonsonbaby.jpg",
      name: "Johnson Baby",
      price: "₹139.99",
      description: "Helps protect infections",
    },
    {
      id: 10,
      image: "img/cetaphil.webp",
      name: "Cetaphil",
      price: "₹234.99",
      description: "Vitamin D & Calcium ",
    },
    {
      id: 11,
      image: "img/joil.jpg",
      name: "Johnson Oil",
      price: "₹29.99",
      description: "No artificial colors, preservatives",
    },
    {
      id: 12,
      image: "img/pampers.jpg",
      name: "Pampers",
      price: "₹234.99",
      description: "DHA & Vitamin B-complex",
    },
    {
      id: 13,
      image: "img/cerelac.jpg",
      name: "Cerelac Mix",
      price: "₹69.99",
      description: "Helps protect with Vitamin C",
    },
    {
      id: 14,
      image: "img/diaperrunsh.webp",
      name: "Diaper Rash Cream",
      price: "₹94.99",
      description: "Vitamin D & Calcium",
    },
    {
      id: 15,
      image: "img/manna.webp",
      name: "Manna Health Mix",
      price: "₹39.99",
      description: "No artificial colors, preservatives",
    },
    {
      id: 16,
      image: "img/gerber.jpg",
      name: "Gerber",
      price: "₹34.99",
      description: "DHA & Vitamin B-complex",
    },
  ];

  return (
    <div>
      {/* carousel Images */}
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ height: "50vh" }}
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          style={{ height: "100%" }}
        >
          <div className="carousel-inner" style={{ height: "100%" }}>
            {/* Slide 1 */}
            <div className="carousel-item active" style={{ height: "100%" }}>
              <img
                className="w-100 h-100"
                src="img/slider/hero1.png"
                alt="Image"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Slide 2 */}
            <div className="carousel-item" style={{ height: "100%" }}>
              <img
                className="w-100 h-100"
                src="img/slider/hero2.png"
                alt="Image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Carousel Controls */}
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

      {/* </div> */}

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

      {/* Main Content with Sidebar and Product List */}
      <div className="flex">
        {/* Sidebar Filter */}
        <SliderBarFilter />
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
                    className="rounded overflow-hidden shadow-lg wow fadeInRight relative" // Ensure 'relative' is here
                  >
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-10 !right-2 text-gray-500 hover:text-red-500 transition border-none outline-none focus:ring-0 z-20" // Forced 'right-2' with ! and increased z-index
                      style={{ right: "0.8rem", top: "0.5rem" }} // Inline style for debugging
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="lg"
                        className={favorites[product.id] ? "text-red-500" : ""}
                      />
                    </button>

                    <div className="h-64 flex items-center justify-center bg-gray-100">
                      <img
                        className="w-full h-full object-cover"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                    <div className="px-6 py-4 bg-white flex flex-col flex-grow">
                      <div className="flex justify-between items-center">
                        <a
                          href="#!"
                          className="font-semibold text-lg text-black no-underline hover:text-indigo-600 transition"
                        >
                          {product.name}
                        </a>
                      </div>
                      <p className="text-gray-500 text-sm">
                        {product.description}
                      </p>
                      <p className="text-1xl font-bold text-black">
                        MRP: {product.price}
                      </p>

                      <button
                        className="mt-auto w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition border-none outline-none focus:ring-0"
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
    </div>
  );
};

export default HomePageComponet;
