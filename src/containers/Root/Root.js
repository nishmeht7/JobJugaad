import React from 'react';
import directParse from '../../lib/parsingFunc.js';

class Root extends React.Component {

	handleClick = () => {
		console.log('clicked Jugaad');
		let output = directParse();
		console.log(output);
	}

	render() {
		return (
			<div>
				<h1>HTML Parser</h1>
				<button
					onClick={this.handleClick}
				>Jugaad!</button>
			</div>
		)
	}
}

export default Root;
