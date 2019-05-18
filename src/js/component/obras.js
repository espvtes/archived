import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export class Obras extends React.Component {
	render() {
		return (
			<div className="container">
				<div id="obras" className="obras">
					<br />
					<div className="row">
						<div className="col-12">
							<h3 className="obras-title">Obras</h3>
						</div>
					</div>
					<div className="row py-4">
						<div className="col-12 col-sm-3 p-2">
							<img
								src="https://charlenemorgan1106473.files.wordpress.com/2014/05/salvador-dalc3ac-1946-la-tentazione-di-santantonio.jpg"
								className="img-fluid w-100"
							/>
						</div>
						<div className="col-12 col-sm-3 p-2">
							<img
								src="https://charlenemorgan1106473.files.wordpress.com/2014/05/salvador-dalc3ac-1946-la-tentazione-di-santantonio.jpg"
								className="img-fluid w-100"
							/>
						</div>
						<div className="col-12 col-sm-3 p-2">
							<img
								src="https://charlenemorgan1106473.files.wordpress.com/2014/05/salvador-dalc3ac-1946-la-tentazione-di-santantonio.jpg"
								className="img-fluid w-100"
							/>
						</div>
						<div className="col-12 col-sm-3 p-2">
							<img
								src="https://charlenemorgan1106473.files.wordpress.com/2014/05/salvador-dalc3ac-1946-la-tentazione-di-santantonio.jpg"
								className="img-fluid w-100"
							/>
						</div>
					</div>
					<div className="row py-4">
						<div className="col-12 col-sm-3 p-2">
							<img
								src="https://charlenemorgan1106473.files.wordpress.com/2014/05/salvador-dalc3ac-1946-la-tentazione-di-santantonio.jpg"
								className="img-fluid w-100"
							/>
						</div>
						<div className="col-12 col-sm-3 p-2">
							<img
								src="https://charlenemorgan1106473.files.wordpress.com/2014/05/salvador-dalc3ac-1946-la-tentazione-di-santantonio.jpg"
								className="img-fluid w-100 rounded"
							/>
						</div>
						<div className="col-12 col-sm-3 p-2">
							<img
								src="https://charlenemorgan1106473.files.wordpress.com/2014/05/salvador-dalc3ac-1946-la-tentazione-di-santantonio.jpg"
								className="img-fluid w-100"
							/>
						</div>
						<div className="col-12 col-sm-3 p-2">
							<img
								src="https://charlenemorgan1106473.files.wordpress.com/2014/05/salvador-dalc3ac-1946-la-tentazione-di-santantonio.jpg"
								className="img-fluid w-100"
							/>
						</div>
					</div>
					<div className="row py-4">
						<div className="col-12 text-center">
							<Link to="/gallery">
								<button type="button" className="btn btn-warning">
									Galeria
								</button>
							</Link>
						</div>
					</div>
					<hr />
				</div>
			</div>
		);
	}
}
