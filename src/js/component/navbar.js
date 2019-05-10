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
				<nav className="navbar fixed-top navbar-light">
					<Link to="/">
						<button type="button" className="btn btn-link text-black">
							LOGO
						</button>
					</Link>
					<ul className="nav justify-content-end">
						<li className="nav-item">
							<a className="navbar-brand" href="#autor">
								Autor
							</a>{" "}
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
								Obras
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
