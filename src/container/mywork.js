import React, { Component } from 'react';
import './css/mywork.css';
import Project from '../components/js/project';
import Scrollbar from '../components/js/scroll';
import { projects } from '../assets/data/UserInfo';

class MyWork extends Component {
	constructor() {
		super()
		this.state = {
			mywork: projects
		}
	}
	render() {
		let { mywork } = this.state; 
		const element = (
			<section id="mywork" className="row">
				<div className="col-lg-12 bg-wrapper">
					<h2 className="h2-style">My Work</h2>
					<Scrollbar h='72'>
						<div className="gallery">
							{mywork.map((p,i) => <Project key={i} data={p} />)}
						</div>
					</Scrollbar>
				</div>
			</section>
		);

		return element;
	}
}

export default MyWork;