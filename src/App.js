import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import React, { useState } from "react";
import MainPageComponet from "./Component/MainPageComponet/MainPageComponet";
import HomePageComponet from "./Component/HomePageComponet/HomePageComponet";
import AboutComponet from "./Component/AboutComponet/AboutComponet";
import InteractiveSustainability from "./Component/InteractiveSustainability/InteractiveSustainability";
import PortfolioComponet from "./Component/PortfolioComponet/PortfolioComponet";
import BlogComponet from "./Component/BlogComponaet/BlogComponet";
import BlogComponaetDynamic from "./Component/BlogComponaetDynamic/BlogComponaetDynamic";
import ContectComponet from "./Component/ContectComponet/ContectComponet";
import Terraclan from "./Component/ServicesList/Terraclan";
import BeEarth from "./Component/ServicesList/BeEarth";
import BeExtraordinaire from "./Component/ServicesList/BeExtraordinaire";
import Satvikhangout from "./Component/ServicesList/Satvikhangout";
import CareerPage from "./Component/CareerPage/CareerPage";
import PrivacyPolicy from "./Component/PrivacyComponet/PrivacyPolicy";
import TermsConditions from "./Component/TermsConditionsComponet/TermsConditions";
import CartPage from "./Component/CartComponent/CartComponent";
import "./App.css";

function ProtectedRoutes() {
  return <Outlet />;
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<MainPageComponet />}>
            <Route
              path="Home_Page"
              element={<HomePageComponet addToCart={addToCart} />}
            />
            <Route path="About_Us" element={<AboutComponet />} />
            <Route
              path="InteractiveSustainability"
              element={<InteractiveSustainability />}
            />
            <Route path="Portfolio" element={<PortfolioComponet />} />
            <Route path="Blog" element={<BlogComponet />} />
            <Route
              path="BlogComponaetDynamic"
              element={<BlogComponaetDynamic />}
            />
            <Route path="Contact" element={<ContectComponet />} />
            <Route
              path="Services_Be_Extraordinaire"
              element={<BeExtraordinaire />}
            />
            <Route path="Services_Terraclan" element={<Terraclan />} />
            <Route path="Services_Beearth" element={<BeEarth />} />
            <Route path="Satvik_hangout" element={<Satvikhangout />} />
            <Route path="Career_Page" element={<CareerPage />} />
            <Route path="Privacy_Policy" element={<PrivacyPolicy />} />
            <Route path="Terms&Conditions" element={<TermsConditions />} />
            <Route
              path="CartPage"
              element={
                <CartPage
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
