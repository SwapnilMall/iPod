import React from 'react';
import './index.css';
import Wheel from './Wheel';
import ZingTouch from 'zingtouch';
import Screen from './Screen';
import $ from 'jquery';

class App extends React.Component {
	constructor() {
		super();
		this.temp_change_in_angle = 0;
		this.temp_selected = 0;
		this.state = {
			options: [ 'Games', 'Music', 'Settings', 'CoverFlow' ],
			songs_Menu: [ 'All Songs', 'Artists', 'Albums' ],
			showPage: -1,
			selected: 0
		};
	}

	componentDidMount() {
		var zt = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
		zt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) => {
			if (document.getElementsByClassName('screen-menu')[0].classList.contains('width-50')) {
				//this rotating facility will only be available when the side bar is shown to the user.
				let dist = event.detail.distanceFromLast;
				this.temp_change_in_angle += dist;
				if (this.temp_change_in_angle > 60) {
					this.temp_selected++;
					this.temp_selected = this.temp_selected % this.state.options.length;
					this.setState({
						selected: this.temp_selected
						// song_index: -1
					});

					this.temp_change_in_angle = 0;
				} else if (this.temp_change_in_angle < -60) {
					this.temp_selected--;
					if (this.temp_selected === -1) this.temp_selected = this.state.options.length - 1;

					this.temp_selected = this.temp_selected % this.state.options.length;
					this.setState({
						selected: this.temp_selected
						// song_index: -1
					});
					this.temp_change_in_angle = 0;
				}
			}
		});
	}

	menuButtonClicked = () => {
		let screenMenuClassList = document.getElementsByClassName('screen-menu')[0].classList;
		if (screenMenuClassList.contains('width-50')) {
			document.getElementsByClassName('screen-menu').classList.remove('width-50');
			// $('screen-menu').removeClass('width-50'); //hide menu
			console.log('ok');
		} else {
			// $('screen-menu').addClass('width-50'); //show menu
			console.log('not');
			document.getElementsByClassName('screen-menu').classList.add('width-50');
		}
	};
	render() {
		return (
			<div className="App">
				<Screen
					optionsInMenu={this.state.options}
					selectedOption={this.state.selected}
					showPage={this.state.showPage}
				/>
				<Wheel menuButtonClicked={this.menuButtonClicked} />
			</div>
		);
	}
}

export default App;
