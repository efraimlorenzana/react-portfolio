import React from 'react';
import '../css/mailme.css';

const MailMe = () => {
	const element = (
		<div id="mailme">
			<h5 className="text-center">Message Me</h5>
			<form>
				<input className="form-control mb-2" type="text" placeholder="Enter Email Address" />
				<textarea id="txtMessage" className="form-control mb-2" placeholder="Enter Message here..."></textarea>
				<div className="text-center pb-2">
					<input className="btn btn-primary w-75" type="submit" value="Send" />
				</div>
			</form>
		</div>
	);
	return element;
}

export default MailMe;