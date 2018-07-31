import React, { Component } from 'react';
import TechLanguage from '../components/js/tech_language';
import { tech_app } from '../assets/data/UserInfo';
import ScrollBar from '../components/js/scroll';
import './css/tech.css';

class Technology extends Component {
	constructor() {
		super();
		this.state = {
			Language_List : tech_app
		}
	}
	render() {
		let { Language_List } = this.state;
		const element = (
			<section id="tech" className="row">
				<div className="col-lg-12">
					<h2 className="h2-style">Technology I have used</h2>
					<ScrollBar>
						<div id="gallery">
							{
								Language_List.map((app,i) => <TechLanguage key={i} data={app}/>)
							}
						</div>
					</ScrollBar>
				</div>
			</section>
		);

		return element;
	}
}

export default Technology;