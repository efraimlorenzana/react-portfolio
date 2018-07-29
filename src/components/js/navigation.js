import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/navigation.css';
import Home from '../../container/home';
import Professional from '../../container/professional';
import About from '../../container/about';

const Navigation = () => {
	const element = (
		<Router>
			<div>
				<div className="row">
					<nav className="navbar navbar-expand-lg navbar-dark nav-color col-lg-12 fixed-top">
					  <a className="navbar-brand" href="/">
					  	<img id="imgLogo" src={require("../../assets/img/circle.gif")} />
					  </a>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>
					  <div className="collapse navbar-collapse" id="navbarNav">
					    <ul className="navbar-nav mr-3">
					      <li className="nav-item">
					      	<Link className="nav-link" to="/">Home</Link>
					      </li>
					      <li className="nav-item">
					      	<Link className="nav-link" to="/professional">Skills</Link>
					      </li>
					      <li className="nav-item">
					      	<Link className="nav-link" to="/portfolio">Portfolio</Link>
					      </li>

					      <li className="nav-item">
					      	<Link className="nav-link" to="/experience">Experience</Link>
					      </li>

					      <li className="nav-item">
					      	<Link className="nav-link" to="/technology">Technology</Link>
					      </li>

					      <li className="nav-item">
					      	<Link className="nav-link" to="/about">About</Link>
					      </li>
					    </ul>
					  </div>
					</nav>
				</div>

				<div>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/professional" component={Professional} />
				</div>
			</div>
		</Router>
	);
	return (element);
}

export default Navigation;