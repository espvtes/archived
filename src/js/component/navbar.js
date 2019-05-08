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
			<div>
				<nav className="navbar fixed-top navbar-light bg-info">
					<Link to="/">
						<button type="button" className="btn btn-link text-white">
							LOGO
						</button>
					</Link>
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<a className="navbar-brand text-white" href="#">
								Raydel Griñan
							</a>
						</li>
					</ul>
					<ul className="nav justify-content-end">
						<li className="nav-item">
							<a className="navbar-brand text-white" href="#autor">
								Autor
							</a>{" "}
						</li>
						<li className="nav-item">
							<a className="navbar-brand text-white" href="#curriculum">
								Curriculum
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-brand text-white" href="#contacto">
								Contacto
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-brand text-white" href="#proyectos">
								Proyectos
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-brand text-white" href="#galeria">
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
