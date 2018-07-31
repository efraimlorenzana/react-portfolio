import React from 'react';
import '../css/tech_language.css';

const TechLang = ({data}) => {
	const element = (
		<div id="tech_language">
			<img alt="lang" className="img-fluid" src={require(`../../assets/img/technology/${data.img}`)} data-toggle="tooltip" title={data.app} />
		</div>
	);

	return element;
}

export default TechLang;