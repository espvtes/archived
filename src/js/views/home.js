import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.js";

import "../../styles/home.scss";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return (
			<div className="container-fluidp-0">
				<div className="row">
					<div className="col-12">
						<a className="navbar-brand" href="#">
							<p className="title">RydeL</p>
							<p className="title">Griñan</p>
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-12 parallax" />
				</div>

				<div className="container">
					{/*autor*/}
					<div className="row pt-4" id="author">
						<div className="col-12 col-sm-3 pt-4">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Salvador_Dali_NYWTS.jpg/220px-Salvador_Dali_NYWTS.jpg"
								className="img-fluid w-100"
							/>
						</div>
						<div className="col-12 col-sm-9 pt-4">
							<h4>Mi obra</h4>
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
								piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
								McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
								the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
								the cites of the word in classical literature, discovered the undoubtable source.
							</p>
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
								piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
								McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
								the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
								the cites of the word in classical literature, discovered the undoubtable source.
							</p>
						</div>
					</div>
					{/*obras*/}
					<section id="obras" className="obras">
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
							<div className="col-12 col-sm-3 p-2 border bg-dark">
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
								<Link to="/galeria">
									<button type="button" className="btn btn-warning">
										Galeria
									</button>
								</Link>
							</div>
						</div>
						<hr />
					</section>
					{/*curriculum*/}
					<div className="row curriculum" id="curriculum">
						<div className="col-12">
							<div className="row">
								<div className="col-12">
									<h3 className="curriculum-title">Trayectoria</h3>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<h3>Primeros años</h3>
									<p>
										1904 - Nacido en Figueres, España, el 11 de mayo. Su primera obra, un paisaje,
										es de 1910.
									</p>
									<p>
										1914 - Empieza la educación secundaria en el colegio de los Hermanos Maristas de
										Figueres donde empieza su interés por la pintura, influenciado particularmente
										por Ramon Pixtox (1872-1925). La mayor parte de los primeros trabajos de Dalí
										son paisajes y escenas de género de campesinos y pescadores.{" "}
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
									<p>
										1921 - Dalí se matricula en la Escuela de Bellas Artes de San Fernando en
										Madrid; conoce a Lorca, Buñuel, y Montes y es influenciado por los Futuristas
										italianos, Bonnard y Eugène Carrière.
									</p>
								</div>
							</div>
							<div className="row">
								<div className="col-12 text-center py-4">
									<Link to="/ver-mas">
										<button type="button" className="btn btn-warning">
											Ver mas...
										</button>
									</Link>
								</div>
							</div>
							<hr />
						</div>
					</div>
					{/*contact*/}
					<div className="row" id="contact">
						<div className="col-12">
							<div className="row py-4">
								<div className="col-12 col-sm-3">
									<h5>Direccion:</h5>
									<p>
										Direccion de particular o del traajo donde localizar en caso de ver tus obras o
										enviar a realizar un projecto
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
												<input
													type="email"
													className="form-control"
													placeholder="nombre@gmail.com"
												/>
											</div>
										</div>
										<div className="row pt-2">
											<div className="col">
												<textarea className="form-control" rows="3" placeholder="Mensaje" />
											</div>
										</div>
										<div className="row pt-2">
											<div className="col">
												<button type="button" className="btn btn-warning btn-sm">
													Enviar...
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<hr />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
