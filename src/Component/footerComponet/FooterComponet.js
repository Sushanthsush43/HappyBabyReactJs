import React from 'react'
import { Link } from 'react-router-dom';

const FooterComponent = ({ setActiveLink }) => {
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <div> 
            <div className="container-fluid footer mt-5 pt-5 wow bg-dark fadeIn" data-wow-delay="0.1s" >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6 col-md-6">
                            <h1 className="text-white mb-4">
                                <img src="img/logo.png" width="300" alt="" />
                            </h1>
                            <p>
                                <b>Get in Touch: Let’s Build a Sustainable Future Together</b><br />
                                At HappyBaby, we are dedicated to helping you make your little one with the utmost love, safety, and nourishment, our baby care solutions ensure gentle protection, comfort, 
                                and happiness, so you can cherish every precious moment of their early years with peace of mind
                            </p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-outline-primary me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Address</h4>
                            <p><i className="fa fa-map-marker-alt me-3"></i>happyBaby XXXXX XXXXX India</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+91 900000000</p>
                            <p><i className="fa fa-envelope me-3"></i>contact@happyBaby.com</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <Link to="/About_Us" className="btn btn-link" onClick={() => handleLinkClick('About_Us')}>About Us</Link>
                            <Link to="/Services_Be_Extraordinaire" className="btn btn-link" onClick={() => handleLinkClick('Services_Be_Extraordinaire')}>Contact Us</Link>
                            {/* Add Privacy and Policy links */}
                            {/* <Link to="/Privacy_Policy" className="btn btn-link" >Privacy Policy</Link>
                            <Link to="/Terms&Conditions" className="btn btn-link">Terms & Conditions</Link> */}
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="#">HappyBaby</a>, All Right Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    )
}

export default FooterComponent;
