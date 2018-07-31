import React from 'react';
import '../css/scroll.css';

const Scroll = (props) => {
	let style = {
		overflowY : 'scroll',
		height : `${props.h}vh`
	}

	const element = (
		<div id="scroll" style = { style } className="p-0">
			{props.children}
		</div>
	);

	return element;
}

export default Scroll;