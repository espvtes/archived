import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.js";
import { Obras } from "../component/obras.js";
import { Curriculum } from "../component/curriculum.js";
import { Contact } from "../component/contact.js";
import "../../styles/home.scss";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return (
			<div className="container-fluid p-0">
				<div className="jumbotron jumbotron-fluid">
					<div className="container-fluid p-0">
						<nav className="navbar navbar-expand-lg navbar-light" href="#id">
							<a className="navbar-brand text-light" href="#">
								<Link to="/">
									<h2 className="home">RG</h2>
								</Link>
							</a>
							<ul className="nav float-right">
								<li className="nav-item">
									<a className="nav-link" href="#autor">
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
										Obra
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light" href="#contact">
										Contacto
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="container">
					<div className="row autor" id="autor">
						<div className="col-12 autor-column">
							<h3 className="autor-name">Raydel Griñan</h3>
						</div>
					</div>
					<div className="row py-4">
						<div className="col-12 col-sm-4 rounded">
							<img
								src="https://cronicaglobal.elespanol.com/uploads/s1/23/58/80/9/salvador-dali.jpeg"
								className="img-fluid w-100 rounded shadow p-3 mb-5"
							/>
						</div>
						<div className="col-12 col-sm-8">
							<p className="pt-2 text-justify">
								Salvador Felipe Jacinto Dali i Domenech nació la mañana del día 11 de mayo 1904 en el
								pequeño pueblo agricultor de Figueres, España. Le llamaron igual que a su hermano mayor,
								Salvador, que había fallecido poco antes de que él naciera. Dalí paso su infancia entre
								Figueres y la casa de veraneo de la familia en el pueblo pescador de Cadaqués, donde sus
								padres le construyeron su primer estudio de arte. Su familia le animó des de muy joven a
								desarrollar su creatividad y fue a estudiar arte a una academia de Madrid.
							</p>
							<p className="text-justify">
								Salvador Felipe Jacinto Dali i Domenech nació la mañana del día 11 de mayo 1904 en el
								pequeño pueblo agricultor de Figueres, España. Le llamaron igual que a su hermano mayor,
								Salvador, que había fallecido poco antes de que él naciera. Dalí paso su infancia entre
								Figueres y la casa de veraneo de la familia en el pueblo pescador de Cadaqués, donde sus
								padres le construyeron su primer estudio de arte. Su familia le animó des de muy joven a
								desarrollar su creatividad y fue a estudiar arte a una academia de Madrid.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="parallax" />
					</div>
				</div>
				<Obras />
				<div className="row">
					<div className="col-12">
						<div className="parallax-2" />
					</div>
				</div>
				<Curriculum />
				<div className="row">
					<div className="col-12">
						<div className="parallax-3" />
					</div>
				</div>
				<Contact />
			</div>
		);
	}
}
