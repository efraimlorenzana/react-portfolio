import React from 'react';
import { bio } from '../assets/data/UserInfo';
import './css/about.css';

class About extends React.Component {
	render() {
		let indent = {
			textIndent : '5em'
		}
		const element = (
			<section id="about" className="row px-lg-5 px-md-3 pb-lg-5 pb-md-3 px-sm-1">
				<div className="col-lg-12 bg-wrapper-darker">
					<h2 className="h2-style mt-3">About me</h2>
					<div className="float-lg-left float-md-left ml-2 ml-lg-5 ml-md-3 mr-3 mb-3 text-center">
						<img alt="my picture" src={require("../assets/img/pic.jpg")} />
					</div>
					<p className=" px-2 px-lg-5 px-md-4 text-justify ls">{bio}</p>
				</div>
			</section>
		);
		return element;
	}
}

export default About;