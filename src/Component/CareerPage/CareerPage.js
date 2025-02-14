import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CareerPage.css'; // Ensure to create this CSS file for styling
import JobApplication from '../JobApplicationComponet/JobApplication';

const CareerPage = () => {
    const [open, setOpen] = useState(false);
    const pageSlug = "career_heading"; // Define your page slug
    const [title, setTitle] = useState("No title");
    const [headers, setHeaders] = useState([]);
    const [paragraphs, setParagraphs] = useState([]);
    const [jobListings, setJobListings] = useState([]); // Define jobListings state here

    const truncateExcerpt = (text) => {
        const words = text.split(' ');
        return words.length > 4 ? words.slice(0, 4).join(' ') + '...' : text; // Limit to 4 words
    };


    useEffect(() => {
        // Fetch the page data from WordPress REST API by slug
        const fetchPageData = async () => {
            try {
                const response = await fetch(`http://localhost/headlessCMS/Server/wordpress/wp-json/wp/v2/pages?slug=${pageSlug}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                console.log("Fetched data:", data);
                if (data && data.length > 0) {
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

                    // Create jobListings array for multiple entries
                    const jobListingsData = newHeaders.map((header, index) => ({
                        title: header.text, // Use the header text as the title
                        description: newParagraphs[index] || "", // Use the corresponding paragraph or empty if not available
                        icon: "fa-briefcase", // Example icon, replace with dynamic icon if needed
                    }));

                    setJobListings(jobListingsData); // Set jobListings state
                }
            } catch (error) {
                console.error("Error fetching page data:", error);
            }
        };

        fetchPageData();
    }, [pageSlug]);

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    return (
        <>
            <Header />
            <Introduction />
            <JobListings jobListings={jobListings} setOpen={setOpen} truncateExcerpt={truncateExcerpt} /> {/* Pass jobListings and setOpen */}
            <JobApplication open={open} setOpen={setOpen} />
        </>
    );
};

// Header Component
const Header = () => (
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-4 text-white animated slideInDown mb-4">
                Career Opportunities
            </h1>
        </div>
    </div>
);

// Introduction Component
const Introduction = () => (
    <div className="brochure-content">
        <section className="section">
            <div className="content-title">
                <h6>Join Our Team</h6>
                <h2>Build Your Career with Us</h2>
            </div>
            <p>At Sezavu, we are committed to sustainability and innovation. Join us to make a positive impact on the environment while advancing your career.</p>
        </section>
    </div>
);

// Job Listings Component
const JobListings = ({ jobListings, setOpen, truncateExcerpt }) => ( // Accept jobListings and setOpen as props
    <div className="brochure-section" style={{ backgroundColor: "#e0e5e0", padding: "40px 0" }}>
        <section className="section">
            <div className="content-title">
                <h6>Available Positions</h6>
                <h2>Explore Our Job Openings</h2>
            </div>
            <div className="job-listings">
                {jobListings.map((job, index) => (
                    <JobCard
                        key={index}
                        title={job.title}
                        description={truncateExcerpt(job.description)} // Truncate the description
                        icon={job.icon}
                        setOpen={setOpen} // Pass setOpen to JobCard
                    />
                ))}
            </div>
        </section>
    </div>
);

// Job Card Component
const JobCard = ({ title, description, icon, setOpen }) => ( // Accept setOpen as a prop
    <div className="job-card">
        <i className={`fa ${icon} icon`}></i>
        <div>
            <h6>{title}</h6>
            <p>{description}</p>
            <button onClick={() => setOpen(true)} className="apply-button">Apply Now</button> {/* Update to open the JobApplication dialog */}
        </div>
    </div>
);

export default CareerPage;
