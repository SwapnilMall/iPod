import React from 'react';

const MenuItem = (props) => {
	const { optionsInMenu, selectedOption } = props;
	return (
		<React.Fragment>
			{optionsInMenu.map((item, index) => {
				return (
					<div className={selectedOption === index ? 'selected' : ''} key={index}>
						<p>{item}</p>
						console.log(props)
					</div>
				);
			})}
			{optionsInMenu.length === 3 ? (
				<div style={{ color: 'green' }}>
					<p style={{ fontSize: 18 }}>
						click "<i className="fas fa-backward" />" to go back
					</p>
				</div>
			) : (
				''
			)}
		</React.Fragment>
	);
};

export default MenuItem;
