import React from "react";
<<<<<<< HEAD

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";
=======
import "../../styles/home.css";
>>>>>>> 60d1a8ca5f4ba181a4b38bbc43b250890faffa3f

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
<<<<<<< HEAD
				<div className="Display-2 text-center">
					<h1 className="title">
						<strong>Welcome to BreatheCode.de</strong>
					</h1>{" "}
					<h3>
						<strong>
							Learn and get better at coding, using technology.
						</strong>
					</h3>
				</div>
				<div className="container">
					<div className="row text-center">
						<div className="col-12 col-sm-6">
							<div className="button1">
								<button
									type="button"
									className="btn btn-outline-success">
									Contribute
								</button>
							</div>
						</div>
						<div className="col-12 col-sm-6">
							<div className="button1">
								<button
									type="button"
									className="btn btn-outline-primary">
									Star Learning now
								</button>
=======
				<div className="row">
					<div className="col-12 p-0">
						<div className="jumbotron jumbotron-fluid" id="home">
							<div className="container">
								<h1 className="display-4">Fluid jumbotron</h1>
								<p className="lead">
									This is a modified jumbotron that occupies
									the entire horizontal space of its parent.
								</p>
							</div>
						</div>
						<nav className="navbar sticky-top">
							<a className="navbar-brand" href="#">
								<img
									src="https://totaltrademanagement.files.wordpress.com/2012/05/paint-brush-psd50308.png"
									className="nav-img"
									width="50"
									height="50"
									alt=""
								/>
							</a>
							<ul className="nav justify-content-end">
								<li className="nav-item">
									<a className="nav-link" href="#home">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#curriculum">
										Curriculum
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#obras">
										Obras
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#proyecto">
										Proyectos
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										link
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#contacto">
										Contacto
									</a>
								</li>
							</ul>
						</nav>
						<div className="row">
							<div className="col-12" />
						</div>
						<div className="row py-4 px-4">
							<div className="col-12 col-sm-3 py-4 px-4">
								<img
									src="https://www.vincentvangogh.org/images/self-portrait.jpg"
									class="img-autor img-fluid w-100"
								/>
							</div>
							<div className="col-12 col-sm-9">
								<h3 class="pt-4">
									<em>Rydel Griñan Legra</em>
								</h3>
								<p class="text-justify">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry is standard
									dummy text ever since the 1500s, when an
									unknown printer took a galley of type and
									scrambled it to make a type specimen book.
									It has survived not only five centuries, but
									also the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop
									publishing software like Aldus PageMaker
									including versions of Lorem Ipsum.
								</p>

								<p class="text-justify">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry is standard
									dummy text ever since the 1500s, when an
									unknown printer took a galley of type and
									scrambled it to make a type specimen book.
									It has survived not only five centuries, but
									also the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop
									publishing software like Aldus PageMaker
									including versions of Lorem Ipsum.
								</p>
>>>>>>> 60d1a8ca5f4ba181a4b38bbc43b250890faffa3f
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
