import React from 'react';
import MenuItem from './MenuItems';

const Menu = (props) => {
	return (
		<div className="screen-menu">
			<div className="app-logo">
				<h3>I-POD</h3>
			</div>
			<MenuItem selectedOption={props.selectedOption} optionsInMenu={props.optionsInMenu} />
		</div>
	);
};

export default Menu;
