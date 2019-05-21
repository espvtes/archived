import React from "react";

export class Project extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-12">
					<div className="row">
						<div col-12>
							<h3>Proyectos</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-6">
							<img
								src="https://nosolotendencias.es/wp-content/uploads/2017/04/Proceso-creaci%C3%B3n-de-Arinze-Stanley.jpg"
								className="img-fluid w-100"
							/>
						</div>
						<div className="col-12 col-md-6">
							<img
								src="https://www.salirconarte.com/wp-content/uploads/2017/08/photorealistic-pencil-drawings-renaissance-hyperrealism-emanuele-dascanio-25.jpg"
								className="img-fluid w-100"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
