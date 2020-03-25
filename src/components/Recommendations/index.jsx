import React from 'react';
import './styles.scss';

class Recommendations extends React.Component {

	render(){
		return (
			<div className="menu">
				<div className="kitten">
					<img src="image/kitten.png" alt="kitten" />
				</div>
				<div className="button-buy">
					<button className="button"></button>
				</div>
				<div className="item-list">
					<div className="grandorf-image">
						<img src="image/grandorf-pack.png" alt="grandorf" />
					</div>
					<div className="description">
						<span className="range">
							в ассортименте <br /> 400г, 700г, 800г
						</span>
						<div className="buy">
							<button></button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Recommendations;