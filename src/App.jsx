import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
	};

	render() {
		return (
			<React.Fragment>
				<NavBar count={this.state.counters.filter((counter) => counter.value > 0).length} />
				<main className="container mt-2">
					<Counters
						counters={this.state.counters}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
						onReset={this.resetCounters}
					/>
				</main>
			</React.Fragment>
		);
	}

	handleDelete = (counterID) => {
		const counters = this.state.counters.filter((counter) => counter.id !== counterID);
		this.setState({
			counters: counters,
		});
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters],
			index = counters.indexOf(counter);
		counters[index] = { ...counters[index] };
		counters[index].value += 1;
		this.setState({
			counters: counters,
		});
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters],
			index = counters.indexOf(counter);
		counters[index] = { ...counters[index] };
		counters[index].value -= 1;
		this.setState({
			counters: counters,
		});
	};

	resetCounters = () => {
		const counters = [...this.state.counters].map((counter) => {
			counter.value = 0;
			return counter;
		});
		this.setState({
			counters: counters,
		});
	};
}

export default App;
