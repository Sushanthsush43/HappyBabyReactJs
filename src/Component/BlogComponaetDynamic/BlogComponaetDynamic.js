import React, { useState } from 'react';

const BlogComponentDynamic = () => {
    // State to store blog data
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            image: "img/homepage_1.jpg",
            title: "Blog 1",
            heading: "Blog Heading 1",
            content: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet."
        },
        {
            id: 2,
            image: "img/homepage_1.jpg",
            title: "Blog 2",
            heading: "Blog Heading 2",
            content: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet."
        }
    ]);

    // State to store new blog input values
    const [newBlog, setNewBlog] = useState({
        id: null,
        image: "",
        title: "",
        heading: "",
        content: ""
    });

    // Handle input change for form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBlog({
            ...newBlog,
            id: blogs.length + 1, // automatically assign id based on the array length
            [name]: value
        });
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewBlog({
                ...newBlog,
                image: reader.result
            });
        };
        if (file) {
            reader.readAsDataURL(file); // Converts image file to base64 string
        }
    };

    // Add new blog to the blogs array
    const addBlog = (e) => {
        e.preventDefault();
        if (newBlog.title && newBlog.heading && newBlog.content && newBlog.image) {
            setBlogs([...blogs, newBlog]);
            // Clear form fields
            setNewBlog({ id: null, image: "", title: "", heading: "", content: "" });
        }
    };

    return (
        <div>
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">
                        Blog
                    </h1>
                </div>
            </div>

            {/* Form to add new blog */}
            <div className="container">
                <h2>Add a New Blog</h2>
                <form onSubmit={addBlog}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={newBlog.title}
                            onChange={handleInputChange}
                            placeholder="Blog Title"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="heading"
                            value={newBlog.heading}
                            onChange={handleInputChange}
                            placeholder="Blog Heading"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageUpload}
                            className="form-control"
                            accept="image/*"
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            name="content"
                            value={newBlog.content}
                            onChange={handleInputChange}
                            placeholder="Blog Content"
                            className="form-control"
                            rows="4"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Blog</button>
                </form>
            </div>

            {/* Display blogs */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {blogs.map((blog) => (
                            <React.Fragment key={blog.id}>
                                <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="position-relative overflow-hidden ps-5 pt-5">
                                        <img width="100%" src={blog.image} alt={blog.title} />
                                    </div>
                                </div>
                                <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.5s"><br/>
                                    <div className="h-100">
                                        <div className="border-start border-5 border-primary ps-4 mb-5">
                                            <h6 className="text-body text-uppercase mb-2">{blog.title}</h6>
                                            <h1 className="display-6 mb-0">{blog.heading}</h1>
                                        </div>
                                        <p>{blog.content}</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogComponentDynamic;
