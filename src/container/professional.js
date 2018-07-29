import React from 'react';
import Skills from '../components/js/skills';
import { skills } from '../assets/data/UserInfo';

class Professional extends React.Component {
	render() {
		const element = (
			<section id="professional">
				<h2 className="h2-style">skill set</h2>
				<h4 className="h2-style">My knowledge level in Software</h4>
				<Skills skills={ skills } />
			</section>
		);
		return element;
	}
}

export default Professional;