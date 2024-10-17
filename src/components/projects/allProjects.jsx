import React, { useState, useEffect } from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch('https://api.github.com/users/' + INFO.projects.github + '/repos');
				if (!response.ok) {
					throw new Error('Failed to fetch repositories');
				}
				const data = await response.json();
				setRepos(data);
			} catch (err) {
				setError('Error: ' + err.message); // Update error state
			} finally {
				setLoading(false); // Stop loading
			}
		};

		fetchRepos();
	}, []);

	return (
		<div className="all-projects-container">
			{loading && !error && <div className="loading-indicator">Loading...</div>} {/* Display loading message */}
			{error && <div className="error-message">{error}</div>} {/* Display error message */}
			{repos.length === 0 && !loading && !error && (
				<div className="no-projects-message">No projects found</div>
			)}
			{!loading && !error && repos.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={"https://github.com/Sd-Shiivam/Sd-Shiivam/blob/main/imagehost/Screenshot%20from%202024-10-17%2019-52-14.png?raw=true"}
						title={project.name}
						description={project.description}
						linkText={project.full_name}
						link={project.html_url}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
