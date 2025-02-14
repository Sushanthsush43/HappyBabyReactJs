import React, { useEffect } from 'react'

const ContectComponet = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);
    return (
        <>
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">
                        Contact Us
                    </h1>

                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
                        <h1 className="mb-5">Let’s Build a Sustainable Future Together</h1>
                        <h6>At Sezavu, we are dedicated to helping you make sustainability the foundation of your success. Whether you're seeking to transform your business, adopt sustainable lifestyle practices, or make informed purchasing decisions, we are here to guide you.</h6>
                        <br />
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Address</h5>
                                    <p className="text-dark"><i className="fa fa-map-marker-alt text-primary me-2 "></i>
                                        Sezavu Sustainable Private Limited, Bangalore, India</p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Contact</h5>
                                    <p className="text-dark"><i className="fa fa-phone text-primary me-2"></i>+91 9900092304</p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">E-mail</h5>
                                    <p className="text-dark"><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <iframe className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6551f9b80e32d52d%3A0xf7c7977c3c9c36d9!2sSezavu%20Sustainable%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1728057812315!5m2!1sen!2sin"
                                frameBorder="0" style={{ minHeight: "350px", border: "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContectComponet