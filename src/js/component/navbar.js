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
			<nav
				className="navbar  navbar-light"
				style={{
					backgroundImage:
						"url('https://www.backgroundcheckall.com/wp-content/uploads/2017/12/background-negro-2.jpg')",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat"
				}}>
				<Link to="/">
					<button type="button" className="nav-link  text-light logo">
						<h1 className="title-button">RG</h1>
					</button>
				</Link>
				<ul className="nav justify-content-end ">
					<li className="nav-item" style={{ borderRight: "1px solid white" }}>
						<a className="nav-link" href="#author" style={{ color: "white" }}>
							Autor
						</a>
					</li>
					<li className="nav-item" style={{ borderRight: "1px solid white" }}>
						<a className="nav-link" href="#curriculum" style={{ color: "white" }}>
							Curriculum
						</a>
					</li>
					<li className="nav-item" style={{ borderRight: "1px solid white" }}>
						<a className="nav-link" href="#obras" style={{ color: "white" }}>
							Obras
						</a>
					</li>
					<li className="nav-item" style={{ borderRight: "1px solid white" }}>
						<a className="nav-link" href="#contact" style={{ color: "white" }}>
							Contacto
						</a>
					</li>
					<li className="nav-item border-right-0">
						<a className="nav-link" href="#" style={{ color: "white" }}>
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
