import React from "react";
import { Link } from "react-router-dom";

export class Project extends React.Component {
	render() {
		return (
			<div
				className="row"
				style={{
					backgroundImage:
						"url('https://www.backgroundcheckall.com/wp-content/uploads/2017/12/background-negro-2.jpg')",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					color: "white"
				}}
				id="project">
				<div className="col-12">
					<div className="container py-4">
						<div className="row py-4">
							<div className="col-12 py-4">
								<h3>Proyectos</h3>
							</div>
						</div>
						<div className="card-deck">
							<div className="card">
								<img
									src="https://nosolotendencias.es/wp-content/uploads/2017/04/Proceso-creaci%C3%B3n-de-Arinze-Stanley.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body text-dark">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is a longer card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
									<p className="card-text">
										<small className="text-muted">Last updated 3 mins ago</small>
									</p>
								</div>
							</div>
							<div className="card">
								<img
									src="https://nosolotendencias.es/wp-content/uploads/2017/04/Proceso-creaci%C3%B3n-de-Arinze-Stanley.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body text-dark">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This card has supporting text below as a natural lead-in to additional content.
									</p>
									<p className="card-text">
										<small className="text-muted">Last updated 3 mins ago</small>
									</p>
								</div>
							</div>
							<div className="card">
								<img
									src="https://nosolotendencias.es/wp-content/uploads/2017/04/Proceso-creaci%C3%B3n-de-Arinze-Stanley.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body text-dark">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This card has even longer content than the first to show
										that equal height action.
									</p>
									<p className="card-text">
										<small className="text-muted">Last updated 3 mins ago</small>
									</p>
								</div>
							</div>
						</div>
						<div className="row py-4">
							<div className="col-12 text-center pt-4">
								<Link to="/procesos">
									<button type="button" className="logo-comp">
										<h4>Procesos</h4>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
