import React from 'react';
import '../css/contact.css';
import MailMe from './mailme';

const Contact = ({info}) => {
	const List = ({data}) => (
		<li>
			<i className="fas fa-phone"></i>
			<span className="ls"> {data.network} : {data.cp_number}</span>
	   </li>
	   );
	const Social = ({id,url,icon}) => (
			<li>
				<a id={id} href={url} target="_blank">
					<i className={`fab ${icon} fa-2x`}></i>
				</a>
			</li>
		);
	const element = (
		<div id="contact" className="row">
			<div className="col-lg-7 col-md-12 col-sm-12">
				<ul id="contactDetails">
					<li>
						<i className="far fa-envelope"></i>
						<span className="ls"> {info.user.email}</span>
					</li>
					{
						info.contact.map((e,i) => <List key={i} data={e} />)
					}

				</ul>

				<ul className="social mt-4">
					{
						info.social.map((s,i) => {
							return <Social 
								key={s.id}
								id={s.alias} 
								url={s.url} 
								icon={s.favicon}
							/>
						})
					}
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