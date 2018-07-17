import React, { PureComponent } from 'react';

export default class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};

	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	};

	render() {
		return (
			<div>
				<button type="button" onClick={this.increment}>
					+
				</button>
				{this.state.count}
				<button type="button" onClick={this.decrement}>
					-
				</button>
			</div>
		);
	}
}
