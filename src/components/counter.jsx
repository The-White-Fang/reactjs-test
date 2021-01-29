import React, { Component } from "react";

class Counter extends Component {
	state = {
		value: 0,
	};

	styles = {
		span: {
			minWidth: 50,
			color: "#ffffff",
		},
		btn: {
			width: 31,
		},
	};

	render() {
		const { counter, onIncrement, onDecrement, onDelete } = this.props;

		return (
			<div className="m-1">
				<span className={"badge mx-1 my-2 " + this.getBadgeType()} style={this.styles.span}>
					{counter.value}
				</span>
				<button
					className="btn btn-secondary btn-sm mx-1"
					style={this.styles.btn}
					onClick={() => onIncrement(counter)}
				>
					+
				</button>
				<button
					className="btn btn-secondary btn-sm mx-1"
					style={this.styles.btn}
					onClick={() => onDecrement(counter)}
				>
					-
				</button>
				<button
					className="btn btn-sm btn-danger"
					onClick={() => onDelete(counter.id)}
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeType = () => {
		return this.props.counter.value ? "badge-primary" : "badge-warning";
	};
}

export default Counter;
