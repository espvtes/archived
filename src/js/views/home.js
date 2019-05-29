import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.js";
import { Obras } from "../component/obras.js";
import { Curriculum } from "../component/curriculum.js";
import { Contact } from "../component/contact.js";
import { Jumbotron } from "../component/jumbotron.js";
import { Project } from "../component/project.js";
import "../../styles/home.scss";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	componentDidMount() {
		window.onscroll = function() {
			scrollFunction();
		};

		function scrollFunction() {
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				document.getElementById("scroll-button").style.display = "block";
			} else {
				document.getElementById("scroll-button").style.display = "none";
			}
		}

		function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	}
	render() {
		return (
			<div className="container-fluid p-0">
				<button onClick="topFunction()" id="scroll-button" title="Go to top" href="#top">
					Up
				</button>
				<div className="row">
					<div className="col-12 parallax-2" />
				</div>

				{/*autor*/}
				<div
					className="row"
					style={{
						backgroundImage:
							"url('https://www.backgroundcheckall.com/wp-content/uploads/2017/12/background-negro-2.jpg')",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						color: "white"
					}}>
					<div className="col-12">
						<div className="container" id="author">
							<div className="row py-4">
								<div className="col-12 autor py-4">
									<div className="row py-4">
										<div className="col-12 col-sm-3">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Salvador_Dali_NYWTS.jpg/220px-Salvador_Dali_NYWTS.jpg"
												className="img-fluid w-100 rounded"
											/>
										</div>
										<div className="col-12 col-sm-9 text-justify">
											<h4>Mi obra</h4>
											<p>
												Contrary to popular belief, Lorem Ipsum is not simply random text. It
												has roots in a piece of classical Latin literature from 45 BC, making it
												over 2000 years old. Richard McClintock, a Latin professor at
												Hampden-Sydney College in Virginia, looked up one of the more obscure
												Latin words, consectetur, from a Lorem Ipsum passage, and going through
												the cites of the word in classical literature, discovered the
												undoubtable source.
											</p>
											<p>
												Contrary to popular belief, Lorem Ipsum is not simply random text. It
												has roots in a piece of classical Latin literature from 45 BC, making it
												over 2000 years old. Richard McClintock, a Latin professor at
												Hampden-Sydney College in Virginia, looked up one of the more obscure
												Latin words, consectetur, from a Lorem Ipsum passage, and going through
												the cites of the word in classical literature, discovered the
												undoubtable source.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 parallax-3" />
				</div>
				<Obras />
				<div className="row">
					<div className="col-12 parallax-4" />
				</div>
				<Curriculum />
				<div className="row">
					<div className="col-12 parallax-5" />
				</div>
				<Project />
				<div className="row">
					<div className="col-12 parallax-4" />
				</div>
				<Contact />
			</div>
		);
	}
}
