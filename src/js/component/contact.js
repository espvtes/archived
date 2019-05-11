import React from "react";
import "../../styles/index.scss";

export class Contact extends React.Component {
	render() {
		return (
			<div className="pt-4">
				<hr />
				<div className="row contact shadow rounded">
					<div className="col-12 col-sm-3">
						<h5>Direccion:</h5>
						<p>
							Direccion de particular o del traajo donde localizar en caso de ver tus obras o enviar a
							realizar un projecto
						</p>
					</div>
					<div className="col-12 col-sm-3">
						<h5>Contacto:</h5>
						<p>+5356744774</p>
						<p>mailto@gmail.com</p>
					</div>
					<div className="col-12 col-sm-3">
						<h5>Enlaces:</h5>
						<p>Facebook</p>
						<p>Instagram</p>
					</div>
					<div className="col-12 col-sm-3 pb-4">
						<h5>Contactenos:</h5>
						<form>
							<div className="row">
								<div className="col">
									<input type="text" className="form-control" placeholder="Tu nombre" />
								</div>
							</div>
							<div className="row pt-2">
								<div className="col">
									<input type="email" className="form-control" placeholder="nombre@gmail.com" />
								</div>
							</div>
							<div className="row pt-2">
								<div className="col">
									<textarea className="form-control" rows="3" placeholder="Mensaje" />
								</div>
							</div>
						</form>
					</div>
				</div>
				<hr />
			</div>
		);
	}
}
