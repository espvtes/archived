import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.js";
import { Jumbotron } from "../component/jumbotron.js";
import { Obras } from "../component/obras.js";
import { Proyectos } from "../component/proyectos.js";
import { Curriculum } from "../component/curriculum.js";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Jumbotron />
				<div className="container">
					<div className="row" id="autor">
						<div className="col-12 px-2 col-md-3 autor">
							<img
								src="https://www.aboutespanol.com/thmb/rNgTw2yNu25YpnuAQ-AJ47ZVCj4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PabloPicasso-5ad21030a474be00364c5dcc.jpg"
								className="autor-img"
								alt="..."
							/>
						</div>
						<div className="col-12 col-md-9 ">
							<p className="text-justify p">
								Mi obra es el resultado de una indagación en el ámbito de la visualidad pictórica de
								herencia post-renacentista, modelada por los recursos representacionales de la tradición
								occidental. Me interesa sobremanera el modo en que el Barroco histórico despliega su
								teatralidad y converge en esa zona de silencio que los metafísicos italianos conservan
								desde sus ancestros tardomedievales. El suceso detenido en el tiempo y la narrativa
								inconclusa, signan el espacio en que confluyen las sombras, marcadas por la luz, y
								señalan un objeto de intrascendencia cotidiana, frugal y sencillo, inusitado y extraño,
								pero también hedónico y a ratos irónico. Pretendo que mi obra trascienda el puro aspecto
								de la ingenua creencia en la representación verista y atraiga al espectador hacia el
								espacio de reflexión sobre las intenciones de identificación de lo representado con la
								realidad a través de las convenciones de identidad y semejanza en que hemos sido
								educados
							</p>
						</div>
					</div>

					<hr />
					<Obras />
					<Curriculum />
					<Proyectos />
				</div>
			</div>
		);
	}
}
