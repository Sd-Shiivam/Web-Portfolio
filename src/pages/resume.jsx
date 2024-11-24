import React, { useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import Logo from "../components/common/logo";

const Resume = () => {
    const [pdfImage] = useState("./resume.png");

    const resumeContainerStyle = {
        width: '100%',
        height: '80vh', // 80% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        overflow: 'hidden', // Ensure no overflow
    };

    const resumeViewerContainerStyle = {
        width: '100%',
        height: '100%', // Full height of the parent container
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    // Dynamic image style based on hover
    const flippableImageStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        filter: 'invert(1)', 
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Resume | ${INFO.main.title}`}</title>
                <meta name="description" content={INFO.homepage_about.description} />
            </Helmet>

            <div className="page-content">
                <NavBar active="resume" />
                <div className="content-wrapper" style={{ padding: '20px' }}>
                    <div className="resume-logo-container" style={{ display: 'flex', justifyContent: 'left', marginTop: '40px' }}>
                        <div className="resume-logo">
                            <Logo width={50} />
                        </div>
                    </div>

                    <div className="resume-container" style={resumeContainerStyle}>
                        <div
                            className="resume-viewer-container"
                            style={resumeViewerContainerStyle}
                        >
                            {pdfImage ? (
                                <img
                                    src={pdfImage}
                                    alt="Resume Page 1"
                                    style={flippableImageStyle} // Apply the dynamic style here
                                />
                            ) : (
                                <p>Loading resume...</p>
                            )}
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Resume;
