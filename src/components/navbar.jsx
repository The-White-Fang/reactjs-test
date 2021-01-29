import React, { Component } from "react";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<span className="navbar-brand mb-0 h1">NavBar</span>
					<span className="nav-item-badge badge-pill badge-secondary ml-auto">
						{this.props.count}
					</span>
				</div>
			</nav>
		);
	}
}

export default NavBar;
