import React, { Component } from 'react';
import './css/mywork.css';
import Project from '../components/js/project';

class MyWork extends Component {
	render() {
		const element = (
			<section id="mywork" class="row">
				<div className="col-lg-12">
					<h2 className="h2-style">My Work</h2>
					<Project />
				</div>
			</section>
		);

		return element;
	}
}

export default MyWork;