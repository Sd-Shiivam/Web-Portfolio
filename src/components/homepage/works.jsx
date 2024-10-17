import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "../../data/user";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{INFO.work_place.map((place, index) => {
							return < div className="work">
								<img
									src={place.logo}
									alt={place.company}
									className="work-image"
								/>
								<div className="work-title">{place.company}</div>
								<div className="work-subtitle">
									{place.position}
								</div>
								<div className="work-duration">{place.timeline}</div>
							</div>
						})
						}
					</div>
				}
			/>
		</div >
	);
};

export default Works;
