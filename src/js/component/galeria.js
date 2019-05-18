import React from "react";

export class Galeria extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="container pt-4">
					<div className="row pt-4">
						<div className="col-12 parallax pt-4">
							<div className="row pt-4">
								<div className="col-12 col-md-4">
									<img
										src="https://www.thisischile.cl/wp-content/uploads/2014/03/pagina_artes_plasticas_690.jpg"
										className="img-fluid w-100"
									/>
								</div>
								<div className="col-12 col-md-8">
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This content is a little bit longer.
										</p>
										<p className="card-text">
											<small className="text-muted">Last updated 3 mins ago</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
