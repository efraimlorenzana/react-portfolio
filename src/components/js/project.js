import React from 'react';
import '../css/project.css';

const Project = ({data}) => {
	const element = (
		<div id="project">
			<div>
				<img alt="New Project" src={require("../../assets/img/projects/new.jpg")} />
			</div>
			<div className="details">
				<h3 className="text-center">{data.title}</h3>
				<p>Description: </p>
				<h6>Technology: </h6>
			</div>
		</div>
	);

	return element;
}

export default Project;