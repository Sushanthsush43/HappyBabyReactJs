import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AboutComponet = () => {

  const [aboutMissionHeader, setAboutMissionHeader] = useState('');
  const [aboutMissionContent, setAboutMissionContent] = useState('');
  const [aboutVisionHeader, setAboutVisionHeader] = useState('');
  const [aboutVisionContent, setAboutVisionContent] = useState('');
  const [abouOurValuesnHeader, setAboutOurValuesnHeader] = useState('');
  const [aboutOurValuesContent, setAboutOurValuesContent] = useState('');
  const [abouSustainabilityHeader, setAboutSustainabilityHeader] = useState('');
  const [aboutSustainabilityContent, setAboutSustainabilityContent] = useState('');

  const [abouIntegrityHeader, setAboutIntegrityHeader] = useState('');
  const [aboutIntegrityContent, setAboutIntegrityContent] = useState('');

  const [aboutQualityHeader, setQualityyHeader] = useState('');
  const [aboutQualityContent, setQualityContent] = useState('');

  const [abouInnovationHeader, setInnovationHeader] = useState('');
  const [aboutInnovationContent, setAboutInnovationContent] = useState('');

  const [abouCollaborationHeader, setAboutCollaborationHeader] = useState('');
  const [aboutCollaborationContent, setAboutCollaborationContent] = useState('');


  useEffect(() => {
    const url = "http://localhost/headlessCMS/Server/wordpress/wp-json/wp/v2/posts";
    axios.get(url)
      .then((res) => {
        // setPostData(res.data);

        // Find post by ID
        const post = res.data.find(item => item.id === 23);
        const post2 = res.data.find(item => item.id === 25);
        const post3 = res.data.find(item => item.id === 27);
        const post4 = res.data.find(item => item.id === 29);
        const post5 = res.data.find(item => item.id === 31);
        const post6 = res.data.find(item => item.id === 34);
        const post7 = res.data.find(item => item.id === 36);
        const post8 = res.data.find(item => item.id === 38);
        // setSpecificPost(post);

        // Extract title and content after setting specificPost
        if (post) {
          setAboutMissionHeader(post.title.rendered);
          setAboutMissionContent(post.content.rendered.replace(/<[^>]*>/g, '').trim());
        }
        if (post2) {
          setAboutVisionHeader(post2.title.rendered);
          setAboutVisionContent(post2.content.rendered.replace(/<[^>]*>/g, '').trim());
        }
        if (post3) {
          setAboutOurValuesnHeader(post3.title.rendered);
          // setAboutOurValuesContent(post3.content.rendered.replace(/<[^>]*>/g, '').trim());
        }
        if (post4) {
          setAboutSustainabilityHeader(post4.title.rendered);
          setAboutSustainabilityContent(post4.content.rendered.replace(/<[^>]*>/g, '').trim());
        }
        if (post5) {
          setAboutIntegrityHeader(post5.title.rendered);
          setAboutIntegrityContent(post5.content.rendered.replace(/<[^>]*>/g, '').trim());
        }
        if (post6) {
          setQualityyHeader(post6.title.rendered);
          setQualityContent(post6.content.rendered.replace(/<[^>]*>/g, '').trim());
        }
        if (post7) {
          setInnovationHeader(post7.title.rendered);
          setAboutInnovationContent(post7.content.rendered.replace(/<[^>]*>/g, '').trim());
        }
        if (post8) {
          setAboutCollaborationHeader(post8.title.rendered);
          setAboutCollaborationContent(post8.content.rendered.replace(/<[^>]*>/g, '').trim());
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const pageSlug = 'About_Us';
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
// console.log("header===>",headers)
// console.log("paragraphs===>",paragraphs)

  return (
    <>
      <div style={{ background: "#e0e5e0" }}>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">

              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s"><br />
                <div className="h-100">
                  <div className="border-start border-5 border-primary ps-4 mb-5">

                    <h1 className="display-6 mb-0">
                      {/* Our Mission */}
                      {headers[0]?.text}
                    </h1>
                  </div>
                  <p align="justify" style={{ lineHeight: "28px", color: '#333' }}> &emsp;
                    {/* To lead a global shift toward sustainability by empowering businesses and individuals to make conscious choices that contribute to long-term success and well-being. */}
                    {paragraphs[0]}
                  </p>
                </div>
              </div>

              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s"><br />
                <div className="h-100">
                  <div className="border-start border-5 border-primary ps-4 mb-5">
                    <h1 className="display-6 mb-0">
                      {/* Our Vision */}
                      {headers[1]?.text}
                    </h1>
                  </div>
                  <p align="justify" style={{ lineHeight: "28px", color: '#333' }}> &emsp;
                    {/* To create an economic landscape where businesses prioritize sustainability and consumers make informed, mindful decisions that benefit the planet and future generations. */}
                    {paragraphs[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h1 className="display-6 mb-0">
                  {/* Our Values  */}
                  {headers[2]?.text}
                </h1>
              </div>

              <div className="row gy-5 gx-4">
                <div className="col-sm-6 wow fadeInRight" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3" ></i>
                    <h6 className="mb-0">
                      {/* Sustainability */}
                      {headers[3]?.text}
                    </h6>
                  </div>
                  <span style={{ color: '#333' }}>
                    {/* Embedding sustainable practices in everything we do. */}
                    {paragraphs[2]}
                  </span>
                </div>
                <div className="col-sm-6 wow fadeInLeft" data-wow-delay="0.2s">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">
                      {/* Integrity */}
                      {headers[4]?.text}
                    </h6>
                  </div>
                  <span style={{ color: '#333' }}>
                    {/* Operating with honesty and transparency, ensuring trust and reliability. */}
                    {paragraphs[3]}
                  </span>
                </div>
                <div className="col-sm-6 wow fadeInRight" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center mb-3">
                    <i
                      className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                    ></i>
                    <h6 className="mb-0">
                      {/* Quality */}
                      {headers[5]?.text}

                    </h6>
                  </div>
                  <span style={{ color: '#333' }}>
                    {/* Delivering high standards in our products and services without compromise. */}
                    {paragraphs[4]}
                  </span>
                </div>
                <div className="col-sm-6 wow fadeInLeft" data-wow-delay="0.4s">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">
                      {/* Innovation */}
                      {headers[6]?.text}
                    </h6>
                  </div>
                  <span style={{ color: '#333' }}>
                    {/* Constantly evolving to find new, effective ways to promote sustainability. */}
                    {paragraphs[5]}
                  </span>
                </div>
                <div className="col-sm-6 wow fadeInRight" data-wow-delay="0.4s">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">
                      {/* Collaboration */}
                      {headers[7]?.text}
                    </h6>
                  </div>
                  <span style={{ color: '#333' }}>
                    {/* Working with partners and clients to create shared value and lasting impact. */}
                    {paragraphs[6]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#e1e1e1" }}>
        <div className="container">
          <div className="col-12"><br /><br /></div>
          <div className="border-start border-5 border-primary ps-4 mb-5 wow fadeInUp">
            <h6 className="text-body text-uppercase mb-2">Who We Are</h6>
            <h1 className="display-6 mb-0">
              Team Details
            </h1>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3 my-auto wow fadeInRight">
              <div className="box shadow-sm p-4">
                <div className="image-wrapper mb-3">
                  <img className="img-fluid" src="img/profile.png" width="100%" alt="" />
                </div>
                <div className="box-desc">
                  <h5>Name</h5>
                  <p>Designation</p>
                </div>
                <ul className="social">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 my-auto wow fadeInUp">
              <div className="box shadow-sm p-4">
                <div className="image-wrapper mb-3">
                  <img className="img-fluid" src="img/profile.png" alt="..." />
                </div>
                <div className="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
                <ul className="social">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 my-auto wow fadeInDown">
              <div className="box shadow-sm p-4">
                <div className="image-wrapper mb-3">
                  <img className="img-fluid" src="img/profile.png" alt="..." />
                </div>
                <div className="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
                <ul className="social">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 my-auto wow fadeInLeft">
              <div className="box shadow-sm p-4">
                <div className="image-wrapper mb-3">
                  <img className="img-fluid" src="img/profile.png" alt="..." />
                </div>
                <div className="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
                <ul className="social">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12"><br /><br /></div>
        </div>
      </div>

    </>
  )
}

export default AboutComponet