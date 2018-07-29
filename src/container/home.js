import React, { Component } from 'react';
import './css/home.css';
import { personal, bio } from '../assets/data/UserInfo';
import MediaQuery from 'react-responsive';
import Contact from '../components/js/contact';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			info: personal,
			about: bio
		};
	}
	render() {
		const {info} = this.state;
		return (
			<section id="home" className="bg text-white row">
				<div className="bg-wrapper col-lg-12 position-relative">
						<div className="col-lg-6 col-md-12 col-sm-12">
							<h3 className="text-center mt-4 mb-2">Hi I'm</h3>
							<h1 className="text-center my-3">{info.firstname}</h1>
							<h2 className="text-center my-3">
								<span className="job-title">Web Developer</span>
							</h2>
						</div>
					<MediaQuery query="(min-device-width: 961px">{/* This will show up on Desktop Devices */}
						<div className="img-lg-frame">
							<img className="img-fluid drop-shadow" alt="My Image" src={require("../assets/img/me.jpg")} />
						</div>
					</MediaQuery>
					<div className="footer">
						<div className="col-lg-7 col-md-12 col-sm-12 px-lg-5">
							<h3 className="h2-style my-3">Contact Me</h3>
							<Contact />
						</div>
					</div>
				</div>
			</section>
		);
	}
}