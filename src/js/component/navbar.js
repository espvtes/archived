import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return (
			<div>
				<nav className="navbar fixed-top navbar-light bg-info">
					<a className="navbar-brand" href="#">
						LOGO
					</a>
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<a className="navbar-brand" href="#">
								Raydel Griñan
							</a>
						</li>
					</ul>
					<ul className="nav justify-content-end">
						<li className="nav-item">
							<a className="navbar-brand" href="#mi obra">
								Mi Obra
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-brand" href="#curriculum">
								Curriculum
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-brand" href="#contacto">
								Contacto
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-brand" href="#proyectos">
								Proyectos
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-brand" href="#galeria">
								Galeria
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

Navbar.propTypes = {
	hreftarget: PropTypes.string
};
