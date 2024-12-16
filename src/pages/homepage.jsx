import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import DomainTyper from "./DomainTyper";

import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/homepage.css";
import TextTyper from "./TextTyper";
import Hint from "../components/common/Hint";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [showProfile, setshowProfile] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);


	useEffect(() => {
		const profileStatus = localStorage.getItem("showProfile");
		if (profileStatus) {
			setshowProfile(true);
		}
	}, [])
	const currentSEO = SEO.find((item) => item.page === "home");
	const domain_style = { color: "darkgreen" }
	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			{showProfile ?
				<div className="page-content">
					<NavBar active="home" />
					<div className="content-wrapper">
						<div className="homepage-logo-container">
							<div style={logoStyle}>
								<Logo width={logoSize} link={false} />
							</div>
						</div>

						<div className="homepage-container">
							<div className="homepage-first-area">
								<div className="homepage-first-area-left-side">
									<div className="title homepage-title">
										Hello, <br /> I'm {INFO.main.name} – <br /> <span style={domain_style}><DomainTyper /></span>
										<span class="auto-text"></span>
									</div>

									<div className="subtitle homepage-subtitle">
										<TextTyper speed={50} text={INFO.homepage_about.description} />
									</div>
								</div>

								<div className="homepage-first-area-right-side">
									<div className="homepage-image-container">
										<div className="homepage-image-wrapper">
											<img
												src="homepage.jpg"
												alt="about"
												className="homepage-image"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="homepage-socials">
								<a
									href={INFO.socials.twitter}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faTwitter}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.instagram}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faInstagram}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={`mailto:${INFO.main.email}`}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faMailBulk}
										className="homepage-social-icon"
									/>
								</a>
							</div>

							<div className="homepage-projects">
								<AllProjects />
							</div>

							<div className="homepage-after-title">
								<div className="homepage-articles">
									{INFO.articles[0] ?
										<Article
											key={(1).toString()}
											date={INFO.articles[0].date}
											title={INFO.articles[0].title}
											description={INFO.articles[0].body.substring(0, 200) + "....."}
											link={"/article/" + (0 + 1)}
										/> : null}
									{INFO.articles[1] ?
										<Article
											key={(2).toString()}
											date={INFO.articles[1].date}
											title={INFO.articles[1].title}
											description={INFO.articles[1].body.substring(0, 200) + "....."}
											link={"/article/" + (2)}
										/> : null}

								</div>

								<div className="homepage-works">
									<Works />
								</div>
							</div>

							<div className="page-footer">
								<Footer />
							</div>
						</div>
					</div>
				</div> : <div style={{ display: "none" }}> Check github code to open Portfolio https://github.com/Sd-Shiivam/Web-Portfolio </div>
			}

			<Hint />
		</React.Fragment>
	);
};

export default Homepage;
