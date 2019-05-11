import React from "react";
import { Link } from "react-router-dom";
export class Proyectos extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row pt-4" id="proyectos">
					<h2>Obras and proceso</h2>
					<div className="col-12">
						<div className="card-deck">
							<div className="card">
								<img
									src="https://roc21cdn-roc21.netdna-ssl.com/blog/wp-content/uploads/2015/08/pinturas-hiperrealistas-al-oleo1.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
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
									src="https://roc21cdn-roc21.netdna-ssl.com/blog/wp-content/uploads/2015/08/pinturas-hiperrealistas-al-oleo1.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
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
									src="https://roc21cdn-roc21.netdna-ssl.com/blog/wp-content/uploads/2015/08/pinturas-hiperrealistas-al-oleo1.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
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
					</div>
				</div>

				<div className="text-center">
					<Link to="/procesos">
						<button type="button" className="btn btn-warning">
							Proyectos en proceso
						</button>
					</Link>
				</div>
				<hr />
			</div>
		);
	}
}
