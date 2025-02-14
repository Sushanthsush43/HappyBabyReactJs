import React, { useEffect, useState } from 'react'
import CaseStudy from '../CaseStudyComponet/CaseStudy';

const InteractiveSustainability = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    return (
        <>
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">
                        Impact
                    </h1>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-end mb-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="border-start border-5 border-primary ps-4">

                                <h1 className="display-6 mb-0">
                                    Interactive Sustainability
                                </h1>
                            </div>
                        </div>

                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0.1s">
                            <img src="img/Graph/G1.png" width="100%" alt="" /> </div>

                        <div className="col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0.1s">
                            <img src="img/Graph/G2.png" width="100%" alt="" /> </div>
                    </div>
                </div>
            </div>

            <div style={{ background: "#dce3dd" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 wow fadeInRight" align="center"><img src="img/i_1.png" width="100%" alt="" /></div>
                        <div className="col-lg-4 wow fadeInDown" align="center"><img src="img/i_2.png" width="100%" alt="" /></div>
                        <div className="col-lg-4 wow fadeInLeft" align="center"><img src="img/i_3.png" width="100%" alt="" /></div>
                        <div className="col-lg-12 wow fadeInDown" align="center"><br /><br /></div>
                    </div></div></div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="h-100">
                            <div className="border-start border-5 border-primary ps-4 mb-5">
                                <h6 className="text-body text-uppercase mb-2">Case Study</h6>
                                <h1 className="display-6 mb-0">Case Study Title </h1>
                            </div>
                            <p style={{ color: '#333' }}>
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                                sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <p className="mb-4" style={{ color: '#333' }}>
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                                sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>

                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                                <div className="tcard"><img src="img/project.jpg" alt="" />
                                    <div className="info">
                                        <h1 style={{ color: "#fff" }}>Mountain</h1>
                                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                        <button onClick={()=>setOpen(true)}>Read More</button>
                                    </div>
                                </div>
                                <div className="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: "200px", height: "200px" }} >
                                    <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3" >
                                        <h1 className="text-white">Case</h1>
                                        <h2 className="text-white">Studies </h2>

                                    </div>
                                    <div className="wrapper">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                                <div className="tcard"><img src="img/project.jpg" alt="" />
                                    <div className="info">
                                        <h1 style={{ color: "#fff" }}>Mountain</h1>
                                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                        <button onClick={()=>setOpen(true)}>Read More</button>
                                    </div>
                                </div>
                                <div className="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: "200px", height: "200px" }} >
                                    <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3" >
                                        <h1 className="text-white">Case</h1>
                                        <h2 className="text-white">Studies </h2>

                                    </div>
                                    <div className="wrapper">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                                <div className="tcard"><img src="img/project.jpg" alt="" />
                                    <div className="info">
                                        <h1 style={{ color: "#fff" }}>Mountain</h1>
                                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                        <button  onClick={()=>setOpen(true)}>Read More</button>
                                    </div>
                                </div>
                                <div className="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: "200px", height: "200px" }} >
                                    <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3" >
                                        <h1 className="text-white">Case</h1>
                                        <h2 className="text-white">Studies </h2>

                                    </div>
                                    <div className="wrapper">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                                <div className="tcard"><img src="img/project.jpg" alt="" />
                                    <div className="info">
                                        <h1 style={{ color: "#fff" }}>Mountain</h1>
                                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                        <button onClick={()=>setOpen(true)}>Read More</button>
                                    </div>
                                </div>
                                <div className="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: "200px", height: "200px" }} >
                                    <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3" >
                                        <h1 className="text-white">Case</h1>
                                        <h2 className="text-white">Studies </h2>

                                    </div>
                                    <div className="wrapper">

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">

                        <div className="border-start border-5 border-primary ps-4 mb-5 wow fadeInUp">
                            <h6 className="text-body text-uppercase mb-2">Stories</h6>
                            <h1 className="display-6 mb-0">Sustainable Stories </h1>
                        </div>

                        <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-4" src="img/profile.png" alt="" />
                                    <p className="fs-5">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                                    </p>
                                    <div
                                        className="bg-primary mb-3"
                                        style={{ width: "60px", height: "5px" }}
                                    ></div>
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-4" src="img/profile.png" alt="" />
                                    <p className="fs-5">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                                    </p>
                                    <div
                                        className="bg-primary mb-3"
                                        style={{ width: "60px", height: "5px" }}></div>
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <CaseStudy open={open} setOpen={setOpen} />
        </>
    )
}

export default InteractiveSustainability