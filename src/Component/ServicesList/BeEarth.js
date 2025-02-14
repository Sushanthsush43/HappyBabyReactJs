import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './BeExtraordinaire.css';

const BeEarth = () => {

    const pageSlug = "be_earth";
    const [title, setTitle] = useState("No title");
    const [headers, setHeaders] = useState([]);
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        // Fetch the page data from WordPress REST API by slug
        const fetchPageData = async () => {
            try {
                const response = await fetch(`https://sezavu.com/wp-json/wp/v2/pages?slug=${pageSlug}`);
                const data = await response.json();

                console.log("Fetched data:", data);
                if (data && data.length > 0) {
                    // Assuming the main content is in `content.rendered` or adjust accordingly
                    const mainContent = data[0]?.content?.rendered || "";

                    // Use a parser to extract headers and paragraphs from HTML
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(mainContent, "text/html");

                    // Extract headers
                    const newHeaders = Array.from(doc.querySelectorAll("h1, h2, h3, h4, h5, h6")).map(header => ({
                        level: header.tagName.toLowerCase().slice(1), // Get the level of the header (h1, h2, etc.)
                        text: header.textContent,
                    }));

                    // Extract paragraphs
                    const newParagraphs = Array.from(doc.querySelectorAll("p")).map(paragraph => paragraph.textContent);

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
    // console.log("header===>", headers)
    // console.log("paragraphs===>", paragraphs)

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    return (
        <div className="brochure">
            <Header />
            <Introduction
                headers={headers}
                paragraphs={paragraphs}
            />
            {/* <ConsciousConsumerism /> */}
        </div>
    );
};

const Header = () => (
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-4 text-white animated slideInDown mb-4">
                Our Services
            </h1>
        </div>
    </div>
);

const Introduction = ({ headers, paragraphs }) => (
    <div className="brochure-content">
        <section className="section">
            <div className="content-title mb-4">
                <h6 className="text-uppercase font-weight-bold">Our Services</h6>
                <h2 className="font-weight-bold">
                    {/* Sustainability-Driven Solutions for Businesses and Individuals */}
                    {headers[0]?.text}
                </h2>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <p className="lead">
                        {/* At Sezavu, we understand that sustainability is the key to building resilient businesses and empowered individuals. Our services are designed to support you in every step of your sustainability journey, whether you're seeking to transform your lifestyle, build a sustainable business, or make informed, eco-conscious purchasing decisions. */}
                        {paragraphs[0]}
                    </p>
                    <section className="section">
                        <div className="content-title mb-4">
                            <h6 className="text-uppercase font-weight-bold">Conscious Consumerism</h6>
                            <h2 className="font-weight-bold">
                                {/* Be Earth */}
                                {headers[1]?.text}
                            </h2>
                        </div>
                        <p>
                            {/* Be Earth is Sezavu’s sustainable eCommerce platform, offering a carefully curated range of eco-friendly products. We make it easier for consumers to make responsible choices by selecting products that prioritize sustainability, ethical sourcing, and responsible production. When you shop with Be Earth, you contribute to a future where conscious consumerism becomes the norm. */}
                            {paragraphs[1]}
                        </p>
                        <p>
                            {/* Our platform supports the SDG principles of responsible consumption and production (SDG 12), and we aim to empower consumers to make choices that benefit both people and the planet. */}
                            {paragraphs[2]}
                        </p>
                    </section>
                </div>
                <div className="col-lg-5">
                    <div className="contact-us p-4 border rounded shadow bg-light">
                        <h4 className="mb-3">Contact Us</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

const ConsciousConsumerism = () => (
    <div className="brochure-section my-5">
        {/* <section className="section">
            <div className="content-title mb-4">
                <h6 className="text-uppercase font-weight-bold">Conscious Consumerism</h6>
                <h2 className="font-weight-bold">Be Earth</h2>
            </div>
            <p>
                Be Earth is Sezavu’s sustainable eCommerce platform, offering a carefully curated range of eco-friendly products. We make it easier for consumers to make responsible choices by selecting products that prioritize sustainability, ethical sourcing, and responsible production. When you shop with Be Earth, you contribute to a future where conscious consumerism becomes the norm.
            </p>
            <p>
                Our platform supports the SDG principles of responsible consumption and production (SDG 12), and we aim to empower consumers to make choices that benefit both people and the planet.
            </p>
        </section> */}
    </div>
);

export default BeEarth;
