import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.js";
import { Obras } from "../component/obras.js";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row p-0">
					<div className="col-12 p-0">
						<img
							src="https://americavive.online/wp-content/uploads/2018/06/hiperrealismo.png"
							className="img-fluid w-100"
						/>
					</div>
				</div>
				<div className="container">
					<section id="autor">
						<div className="row py-4">
							<div className="col-12 col-sm-3">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9eY2zG-z7x1R-gcji5TaEVwrcUkZDGjjVtHIK2lg-d84G2782"
									className="img-fluid w-100"
								/>
							</div>
							<div className="col-12 col-sm-9">
								<p>
									Salvador Dalí, in full Salvador Felipe Jacinto Dalí y Domenech, (born May 11, 1904,
									Figueras, Spain—died January 23, 1989, Figueras), Spanish Surrealist painter and
									printmaker, influential for his explorations of subconscious imagery.
								</p>
							</div>
						</div>
					</section>
					<Obras />
					<section id="curriculum">
						<hr />
						<div className="row pt-4">
							<div className="col-12">
								<h5>Curriculum</h5>
							</div>
						</div>
						<div className="row pt-4">
							<div className="col-12">
								<p>
									Salvador Felipe Jacinto Dali i Domenech nació la mañana del día 11 de mayo 1904 en
									el pequeño pueblo agricultor de Figueres, España. Le llamaron igual que a su hermano
									mayor, Salvador, que había fallecido poco antes de que él naciera. Dalí paso su
									infancia entre Figueres y la casa de veraneo de la familia en el pueblo pescador de
									Cadaqués, donde sus padres le construyeron su primer estudio de arte. Su familia le
									animó des de muy joven a desarrollar su creatividad y fue a estudiar arte a una
									academia de Madrid.
								</p>
								<p>
									Salvador Felipe Jacinto Dali i Domenech nació la mañana del día 11 de mayo 1904 en
									el pequeño pueblo agricultor de Figueres, España. Le llamaron igual que a su hermano
									mayor, Salvador, que había fallecido poco antes de que él naciera. Dalí paso su
									infancia entre Figueres y la casa de veraneo de la familia en el pueblo pescador de
									Cadaqués, donde sus padres le construyeron su primer estudio de arte. Su familia le
									animó des de muy joven a desarrollar su creatividad y fue a estudiar arte a una
									academia de Madrid.
								</p>
								<p>
									Salvador Felipe Jacinto Dali i Domenech nació la mañana del día 11 de mayo 1904 en
									el pequeño pueblo agricultor de Figueres, España. Le llamaron igual que a su hermano
									mayor, Salvador, que había fallecido poco antes de que él naciera. Dalí paso su
									infancia entre Figueres y la casa de veraneo de la familia en el pueblo pescador de
									Cadaqués, donde sus padres le construyeron su primer estudio de arte. Su familia le
									animó des de muy joven a desarrollar su creatividad y fue a estudiar arte a una
									academia de Madrid.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12 text-center">
								<button className="btn btn-warning" type="button">
									TRAYECTORIA
								</button>
							</div>
						</div>
						<hr />
					</section>
				</div>
			</div>
		);
	}
}
