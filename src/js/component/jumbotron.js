import React from "react";
import "../../styles/index.scss";
export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="">
				<div className="row text-white jumbotron">
					<div className="col-12">
						<div className="container">
							<h1 className="display-4">SOME TEXT</h1>
							<p className="lead">
								This is a modified jumbotron that occupies the entire horizontal space of its parent.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
