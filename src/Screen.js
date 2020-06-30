import React from 'react';
import Menu from './ScreenComponents/Menu';
import Games from './ScreenComponents/Games';
import Setting from './ScreenComponents/Setting';
import CoverFlow from './ScreenComponents/CoverFlow';

const Screen = (props) => {
	return (
		<div className="screen-container">
			<Menu selectedOption={props.selectedOption} optionsInMenu={props.optionsInMenu} />
			{props.showPage === 0 && props.optionsInMenu.length === 4 ? <Games /> : ''}
			{props.showPage === 2 && props.optionsInMenu.length === 4 ? <Setting /> : ''}
			{props.showPage === 3 && props.optionsInMenu.length === 4 ? <CoverFlow /> : ''}
		</div>
	);
};

export default Screen;
