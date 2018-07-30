import React from 'react';
import '../css/contact.css';
import MailMe from './mailme';

const Contact = () => {
	const element = (
		<div id="contact" className="row">
			<div className="col-lg-7 col-md-12 col-sm-12">
				<ul>
					<li>
						<i className="far fa-envelope"></i>
						<span className="ls"> efraim.lorenzana@gmail.com</span>
					</li>

					<li>
						<i className="fas fa-phone"></i>
						<span className="ls"> Globe +63906 008 2533</span>
					</li>

					<li>
						<i className="fas fa-phone"></i>
						<span className="ls"> Smart +63912 591 6099</span>
					</li>
				</ul>

				<ul className="social mt-4">
					<li><a id="fb" href="https://www.facebook.com/strife08" target="_blank"><i className="fab fa-facebook-f fa-2x"></i></a></li>
					<li><a id="gh" href="https://www.github.com/efraimlorenzana" target="_blank"><i className="fab fa-github fa-2x"></i></a></li>
					<li><a id="cp" href="https://codepen.io/efraimlorenzana/" target="_blank"><i className="fab fa-codepen fa-2x"></i></a></li>
					<li><a id="gl" href="https://gitlab.com/efraim.lorenzana" target="_blank"><i className="fab fa-gitlab fa-2x"></i></a></li>
					<li><a id="li" href="https://www.linkedin.com/in/efraim-lorenzana-4bbb2575/" target="_blank"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
				</ul>
			</div>

			<div className="col-lg-5 col-md-12 col-sm-12">
				<MailMe />
			</div>
		</div>
	);
	return element;
}

export default Contact;