import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.js";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row p-0">
					<div className="col-12 p-0">
						<img
							src="https://americavive.online/wp-content/uploads/2018/06/hiperrealismo.png"
							className="img-fluid w-100"
						/>
					</div>
				</div>
			</div>
		);
	}
}
