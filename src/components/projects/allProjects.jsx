import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {

	return (
		<div className="all-projects-container">
			{INFO.repos.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={"https://github.com/Sd-Shiivam/Sd-Shiivam/blob/main/imagehost/Screenshot%20from%202024-10-17%2019-52-14.png?raw=true"}
						title={project.name}
						description={project.description.substring(0, 100) + "....."}
						linkText={project.full_name}
						link={project.html_url}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
