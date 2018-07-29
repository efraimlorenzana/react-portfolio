import React from 'react';

const Skill = ({ details }) => {
	const { progress } = details;
	const element = (
		<div id="skillSet" className="row mb-2">
			<div className="text-lg-right text-md-center col-lg-3">{details.lang}</div>
			<div className="col-lg-7">
				<div className="progress bg-dark">
				  <div className={`progress-bar bg-success`} style={{'width' : progress + '%'}} role="progressbar"  aria-valuenow={`${progress}`} aria-valuemin="0" aria-valuemax="100">{progress + '%'}</div>
				</div>
			</div>
		</div>
	);
	return element;
}

export default Skill;