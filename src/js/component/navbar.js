import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<ul className="nav">
					<li className="nav-item">
						<a className="nav-link " href="#author">
							Autor
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#curriculum">
							Curriculum
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#obras">
							Obras
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#contact">
							Contacto
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

Navbar.propTypes = {
	hreftarget: PropTypes.string
};
