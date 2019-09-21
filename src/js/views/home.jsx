import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
