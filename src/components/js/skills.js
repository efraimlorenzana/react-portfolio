import React from 'react';
import SkillSet from './skillset';

const Skills = ({skills}) => {
	return (<div>{skills.map((e,i) => <SkillSet key={i} details={ e } /> )}</div>);
}

export default Skills;