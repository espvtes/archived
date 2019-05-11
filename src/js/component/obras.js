import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export class Obras extends React.Component {
	render() {
		return (
			<div id="obras" className="section-obras pt-4">
				<div className="titles">
					<h2>Obras</h2>
				</div>
				<br />
				<div className="row obras text-white">
					<div className="col-12 col-sm-3">
						<img
							src="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/57889.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="row">
							<div className="col-12 pt-2">
								<h5 className="title">title</h5>
								<p className="description">Card description</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="https://www.artelista.com/blog/wp-content/uploads/2016/08/Smirk-2009-Alyssa-Monks.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="row">
							<div className="col-12 pt-2">
								<h5 className="title">title</h5>
								<p className="description">Card description</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="http://www.diariocontraste.com/wp-content/uploads/2016/10/1-5-563x340.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="row">
							<div className="col-12 pt-2">
								<h5 className="title">title</h5>
								<p className="description">Card description</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="https://i0.wp.com/artefeed.com/wp-content/uploads/2015/04/hiperrealismo-Marco-Grassi-1.jpg?fit=900%2C687&ssl=1"
							className="card-img-top"
							alt="..."
						/>
						<div className="row">
							<div className="col-12 pt-2">
								<h5 className="title">title</h5>
								<p className="description">Card description</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-sm-3">
						<img
							src="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/57889.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="row">
							<div className="col-12 pt-2">
								<h5 className="title">title</h5>
								<p className="description">Card description</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="https://www.artelista.com/blog/wp-content/uploads/2016/08/Smirk-2009-Alyssa-Monks.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="row">
							<div className="col-12 pt-2">
								<h5 className="title">title</h5>
								<p className="description">Card description</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="http://www.diariocontraste.com/wp-content/uploads/2016/10/1-5-563x340.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="row">
							<div className="col-12 pt-2">
								<h5 className="title">title</h5>
								<p className="description">Card description</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="https://i0.wp.com/artefeed.com/wp-content/uploads/2015/04/hiperrealismo-Marco-Grassi-1.jpg?fit=900%2C687&ssl=1"
							className="card-img-top"
							alt="..."
						/>
						<div className="row">
							<div className="col-12 pt-2">
								<h5 className="title">title</h5>
								<p className="description">Card description</p>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<Link to="/galeria">
						<button type="button" className="btn btn-warning">
							GALERIA
						</button>
					</Link>
				</div>
				<hr />
			</div>
		);
	}
}
