import React, { Component } from 'react';
import './css/home.css';
import { bio } from '../assets/data/UserInfo';
import Contact from '../components/js/contact';
import { SERVER_URL } from '../server';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			info: '',
			about: bio
		};
	}
	componentDidMount() {
		fetch(`${SERVER_URL}/user_info`,{
			method: 'POST',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify({
				id: '1'
			})
		})
		.then(data => data.json())
		.then(res => this.setState({info:res}))
		.catch(res => this.setState({info:res}));
		// this.setState({info: personal})
	}
	render() {
		const {info} = this.state;
		return !info.isSuccess ? <h1>Loding ...</h1> : (
			<section id="home" className="bg text-white row">
				<div className="bg-wrapper col-lg-12 position-relative">
						<div className="col-lg-6 col-md-12 col-sm-12">
							<h6 className="text-center m-head mb-2">Hi ! my name is</h6>
							<h5 className="text-center my-3">{info.user.fullname}</h5>
							<h1 className="text-center my-3">
								<span className="job-title">Web Developer</span>
							</h1>
						</div>
						<div className="img-lg-frame">
							<img className="img-fluid drop-shadow" alt="" src={require("../assets/img/me.jpg")} />
						</div>
					<div className="footer">
						<div className="col-lg-7 col-md-12 col-sm-12 px-lg-5">
							<h3 className="h2-style my-3">Contact Me</h3>
							<Contact info={info} />
						</div>
					</div>
				</div>
			</section>
		);
	}
}