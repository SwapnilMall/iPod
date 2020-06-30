import React from 'react';

const Wheel = (props) => {
	return (
		<div className="buttons-container">
			<button className="center-circle">
				<h2>SELECT</h2>
			</button>

			<button className="menu-button" onClick={props.menuButtonClicked}>
				<i className="fas fa-bars" />
			</button>
			<button className="left-button">
				<i className="fas fa-backward" />
			</button>
			<button className="right-button">
				<i className="fas fa-forward" />
			</button>
			<button className="play-pause">
				<i className="fas fa-play" />/<i className="fas fa-pause" />
			</button>
		</div>
	);
};

export default Wheel;
