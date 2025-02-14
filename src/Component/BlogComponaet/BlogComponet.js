import React, { useEffect, useState } from 'react';
import Blog1 from '../BlogrPageComponet/Blog1';
import './BlogComponent.css'; // Ensure to create a CSS file for custom styles

const BlogComponent = () => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const pageSlug = "blog"; // Define your page slug
    const [title, setTitle] = useState("No title");
    const [headers, setHeaders] = useState([]);
    const [paragraphs, setParagraphs] = useState([]);
    const [images, setImages] = useState([]); // New state variable for images
    const [selectedBlog, setSelectedBlog] = useState(null); // State to hold selected blog data

    const truncateExcerpt = (text) => {
        const words = text.split(' ');
        return words.length > 3 ? words.slice(0, 3).join(' ') + '...' : text;
    };
    
    useEffect(() => {
        // Fetch the page data from WordPress REST API by slug
        const fetchPageData = async () => {
            try {
                const response = await fetch(`https://sezavu.com/wp-json/wp/v2/pages?slug=${pageSlug}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                console.log("Fetched data:", data);
                if (data && data.length > 0) {
                    const mainContent = data[0]?.content?.rendered || "";

                    // Use a parser to extract headers, paragraphs, and images from HTML
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(mainContent, "text/html");

                    // Extract headers
                    const newHeaders = Array.from(doc.querySelectorAll("h1, h2, h3, h4, h5, h6")).map(header => ({
                        level: header.tagName.toLowerCase().slice(1), // Get the level of the header (h1, h2, etc.)
                        text: header.textContent,
                    }));

                    // Extract paragraphs
                    const newParagraphs = Array.from(doc.querySelectorAll("p")).map(paragraph => paragraph.textContent);

                    // Extract images
                    const newImages = Array.from(doc.querySelectorAll("img")).map(img => img.src); // Get the src attributes of img tags

                    // Update state variables
                    setTitle(data[0]?.title?.rendered || "No title");
                    setHeaders(newHeaders);
                    setParagraphs(newParagraphs);
                    setImages(newImages); // Store images in state

                    // Create blogData array for multiple entries
                    const blogData = newHeaders.map((header, index) => ({
                        image: newImages[index % newImages.length], // Use images in a round-robin fashion
                        title: header.text, // Use the header text as the title
                        excerpt: newParagraphs[index] || "", // Use the corresponding paragraph or empty if not available
                    }));
                    setFilteredBlogs(blogData);
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

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = filteredBlogs.filter(blog =>
            blog.title.toLowerCase().includes(value)
        );
        setFilteredBlogs(filtered);
    };

    const onReadMore = (blog) => { // Accept the blog data as a parameter
        setSelectedBlog(blog); // Set the selected blog data
        setOpen(true);
    };

    return (
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Our Blog</h1>
                </div>
            </div>

            {/* Search Input */}
            <div className="container mb-4">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <input
                            type="text"
                            className="form-control search-bar"
                            placeholder="Search blog by title..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </div>

            <div className="section search-result-wrap">
                <div className="container">
                    <div className="row g-4">
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog, index) => (
                                <div key={index} className="col-lg-6 col-md-6">
                                    <div className="blog-entry card border-0 shadow-sm mb-4">
                                        <a className="img-link">
                                            <img src={blog.image} alt="Image" className="img-fluid rounded-top" />
                                        </a>
                                        <div className="card-body">
                                            <h3 className="card-title mt-2">
                                                <a className="blog-title">{blog.title}</a>
                                            </h3>
                                            <p className="card-text">{truncateExcerpt(blog.excerpt)}</p>
                                            <a className="btn btn-primary btn-sm" onClick={() => onReadMore(blog)}>
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No blogs found matching your search.</p>
                        )}
                    </div>
                </div>
            </div>

            <Blog1 open={open} setOpen={setOpen} selectedBlog={selectedBlog} /> {/* Pass selectedBlog to Blog1 */}
        </>
    );
};

export default BlogComponent;
