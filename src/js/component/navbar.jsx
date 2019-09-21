import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Learn To code</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">About as</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						Open Source Project
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-outline-primary">
							Login
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}
