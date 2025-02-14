import React, { useEffect, useState } from 'react';

const PrivacyPolicy = () => {

    const pageSlug = 'Privacy_Policy';
    const [title, setTitle] = useState("No title");
    const [headers, setHeaders] = useState([]);
    const [content, setContent] = useState([]); // New state for combined content

    useEffect(() => {
        // Fetch the page data from WordPress REST API by slug
        const fetchPageData = async () => {
            try {
                const response = await fetch(`http://localhost/headlessCMS/Server/wordpress/wp-json/wp/v2/pages?slug=${pageSlug}`);
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

                    // Combine headers and paragraphs into an array of objects
                    const combinedContent = newHeaders.map((header, index) => ({
                        header: header.text,
                        paragraph: newParagraphs[index] || "", // Use the corresponding paragraph or an empty string if not available
                    }));

                    // Update state variable with combined content
                    setContent(combinedContent);
                    setTitle(data[0]?.title?.rendered || "No title");
                }
            } catch (error) {
                console.error("Error fetching page data:", error);
            }
        };

        fetchPageData();
    }, [pageSlug]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container my-5">
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Privacy Policy</h1>
                </div>
            </div>
            <div className="shadow p-4 bg-light rounded">
                {content.length > 0 ? (
                    content.map((item, index) => (
                        <div key={index}>
                            <h2 className="mt-4 mb-4">{item.header}</h2>
                            <p className="text-muted">{item.paragraph}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-muted">Loading content...</p>
                )}
            </div>
        </div>
    );
};

export default PrivacyPolicy;
