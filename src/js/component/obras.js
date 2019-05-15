import React from "react";
import "../../styles/index.scss";

export class Obras extends React.Component {
	render() {
		const obrasStyles = {
			border: "2px solid black"
		};
		return (
			<section id="obras" className="obras  rounded p-4" style={obrasStyles}>
				<div className="row pt-4">
					<div className="col-12 text-dark">
						<h5>Obras</h5>
					</div>
				</div>
				<div className="row py-4">
					<div className="col-12 col-sm-3">
						<img
							src="https://lavozdelmuro.net/wp-content/uploads/2016/11/pinturas_hiperrealistas_20.jpg"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="https://lavozdelmuro.net/wp-content/uploads/2016/11/pinturas_hiperrealistas_20.jpg"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="https://lavozdelmuro.net/wp-content/uploads/2016/11/pinturas_hiperrealistas_20.jpg"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="https://lavozdelmuro.net/wp-content/uploads/2016/11/pinturas_hiperrealistas_20.jpg"
							className="img-fluid w-100"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-sm-3">
						<img
							src="https://lavozdelmuro.net/wp-content/uploads/2016/11/pinturas_hiperrealistas_20.jpg"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="https://lavozdelmuro.net/wp-content/uploads/2016/11/pinturas_hiperrealistas_20.jpg"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="https://lavozdelmuro.net/wp-content/uploads/2016/11/pinturas_hiperrealistas_20.jpg"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-3">
						<img
							src="https://lavozdelmuro.net/wp-content/uploads/2016/11/pinturas_hiperrealistas_20.jpg"
							className="img-fluid w-100"
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-12 pt-4 text-center">
						<button className="btn btn-warning" type="button">
							GALERIA
						</button>
					</div>
				</div>
			</section>
		);
	}
}
