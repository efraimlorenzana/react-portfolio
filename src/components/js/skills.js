import React from 'react';
import SkillSet from './skillset';

const Skills = ({skills}) => {
	return (
		<div className="row">
			<div className="col-lg-12">
				{skills.map((e,i) => <SkillSet key={i} details={ e } /> )}
			</div>
		</div>);
}

export default Skills;