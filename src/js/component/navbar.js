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
			<nav className="navbar navbar-light parallax-2">
				<Link to="/">
					<button type="button" className="nav-link  text-light logo">
						<h1 className="title-button">RG</h1>
					</button>
				</Link>

				<ul className="nav justify-content-end ">
					<li className="nav-item" style={{ borderRight: "1px solid black" }}>
						<a className="nav-link" href="#author" style={{ color: "black", fontSize: "20px" }}>
							Autor
						</a>
					</li>
					<li className="nav-item" style={{ borderRight: "1px solid black" }}>
						<a className="nav-link" href="#curriculum" style={{ color: "black", fontSize: "20px" }}>
							Curriculum
						</a>
					</li>
					<li className="nav-item" style={{ borderRight: "1px solid black" }}>
						<a className="nav-link" href="#obras" style={{ color: "black", fontSize: "20px" }}>
							Obras
						</a>
					</li>
					<li className="nav-item" style={{ borderRight: "1px solid black" }}>
						<a className="nav-link" href="#contact" style={{ color: "black", fontSize: "20px" }}>
							Contacto
						</a>
					</li>
					<li className="nav-item border-right-0" style={{ borderRight: "1px solid black" }}>
						<a className="nav-link" href="#" style={{ color: "black", fontSize: "20px" }}>
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
