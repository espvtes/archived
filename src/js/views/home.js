import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.js";
import { Obras } from "../component/obras.js";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid p-0">
				<div className="jumbotron jumbotron-fluid">
					<div className="container-fluid p-0">
						<nav className="navbar navbar-expand-lg navbar-light">
							<a className="navbar-brand text-light" href="#">
								Hidden brand
							</a>
							<ul className="nav float-right">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Autor
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light" href="#">
										Curriculum
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light" href="#">
										Obra
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light" href="#">
										Contacto
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="container">
					<div className="row py-4">
						<div className="col-12 col-sm-3">
							<img
								src="https://cronicaglobal.elespanol.com/uploads/s1/23/58/80/9/salvador-dali.jpeg"
								className="img-fluid w-100"
							/>
						</div>
						<div className="col-12 col-sm-9">
							<p>
								Salvador Felipe Jacinto Dali i Domenech nació la mañana del día 11 de mayo 1904 en el
								pequeño pueblo agricultor de Figueres, España. Le llamaron igual que a su hermano mayor,
								Salvador, que había fallecido poco antes de que él naciera. Dalí paso su infancia entre
								Figueres y la casa de veraneo de la familia en el pueblo pescador de Cadaqués, donde sus
								padres le construyeron su primer estudio de arte. Su familia le animó des de muy joven a
								desarrollar su creatividad y fue a estudiar arte a una academia de Madrid.
							</p>
							<p>
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
			</div>
		);
	}
}
