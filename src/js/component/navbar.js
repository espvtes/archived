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
			<nav className="navbar">
				<Link to="/">
					<button type="button" className="nav-link  text-light logo">
						<h1 className="title-button">RG</h1>
					</button>
				</Link>

				<ul className="nav justify-content-end ">
					<li className="nav-item">
						<a className="nav-link text-light" href="#author">
							Autor
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#curriculum">
							Curriculum
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#obras">
							Obras
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#contact">
							Contacto
						</a>
					</li>
					<li className="nav-item border-right-0">
						<a className="nav-link text-light" href="#">
							Proyectos
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
