import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import Text_typer from './Text_typer'
import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const link_color = { color: "red" }
	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Connect: Ways to Reach Out
						</div>

						<div className="subtitle contact-subtitle">
							<Text_typer speed={40} text={"Thank you for your interest in reaching out!"} />
							<br />
							I’m always open to feedback, questions, and new ideas.
							If you have something on your mind, feel free to {" "}
							<a style={link_color} href={`mailto:${INFO.main.email}`}>
								Email
							</a> me directly.
							I aim to respond to all messages within 24 hours, though there may be a slight delay during busy times.
							<br />
							.If you prefer connecting on social media, I’m active on {' '}
							<a style={link_color}
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								Instagram
							</a>, where I share updates and interact with my followers. Don’t hesitate to reach out there as well.
							<br />
							Thanks again for your interest — I look forward to hearing from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
