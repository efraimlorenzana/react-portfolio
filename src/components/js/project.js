import React from 'react';
import '../css/project.css';

const Project = ({data}) => {
	let caption = data.site !== '#' ? <i className="fas fa-eye fa-2x"></i> : <i className="fas fa-eye-slash fa-2x"></i>;
	let tooltip = data.site !== '#' ? 'Preview Available' : 'No Preview Available';
	const element = (
		<div id="project" className="ls position-relative">
			<div>
				<img id="site" alt="New Project" src={require(`../../assets/img/projects/${data.img}`)} />
			</div>
			<div className="details">
				<h3 className="text-center text-white">{data.title}</h3>
				<span><strong className="text-danger">Description:</strong></span>
				<p className="text-center">{data.description}</p>
				<span><strong className="text-danger">Technology:</strong></span>
				<h6 className="text-center">{data.tech}</h6>
			</div>
			<div id="btn" className="text-center p-3">
				<a className="text-danger" data-toggle="tooltip" title={`${tooltip}`} data-placement="bottom" target="_blank" href={data.site}>{caption}</a>
			</div>
		</div>
	);

	return element;
}

export default Project;