import React from 'react';
import Skills from '../components/js/skills';
import { skills } from '../assets/data/UserInfo';
import Scrollbar from '../components/js/scroll';

class Professional extends React.Component {
	render() {
		const element = (
			<section id="professional" className="row">
				<div className="col-lg-12">
					<h2 className="h2-style pb-0 mb-0">skill set</h2>
					<h4 className="h2-style">My knowledge level in Software</h4>
				</div>
				<div className="col-lg-12">
					<Scrollbar h='60'>
						<Skills skills={ skills } />
					</Scrollbar>
				</div>
			</section>
		);
		return element;
	}
}

export default Professional;