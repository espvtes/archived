import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export class Galeria extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-3 imagen-parent">
						<img
							src="https://cdnmx.20m.es/img2/recortes/2013/02/16/3540-404-550.jpg"
							alt="Avatar"
							className="img-ch"
						/>
						<div className="overlay">My Name is John</div>
					</div>
					<div className="col-12 col-sm-3 imagen-parent">
						<img
							src="https://cdnmx.20m.es/img2/recortes/2013/02/16/3540-404-550.jpg"
							alt="Avatar"
							className="img-ch"
						/>
						<div className="overlay">My Name is John</div>
					</div>
					<div className="col-12 col-sm-3 imagen-parent">
						<img
							src="https://cdnmx.20m.es/img2/recortes/2013/02/16/3540-404-550.jpg"
							alt="Avatar"
							className="img-ch"
						/>
						<div className="overlay">My Name is John</div>
					</div>
					<div className="col-12 col-sm-3 imagen-parent">
						<img
							src="https://cdnmx.20m.es/img2/recortes/2013/02/16/3540-404-550.jpg"
							alt="Avatar"
							className="img-ch"
						/>
						<div className="overlay">My Name is John</div>
					</div>
				</div>
			</div>
			// <div className="galeria pt-4">
			// 	<div className="card-deck">
			// 		<div className="card">
			// 			<img
			// 				src="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/57889.jpg"
			// 				className="card-img-top"
			// 				alt="..."
			// 			/>
			// 			<div className="card-body">
			// 				<h5 className="card-title">Card title</h5>
			// 				<p className="card-text">
			// 					This is a longer card with supporting text below as a natural lead-in to additional
			// 					content. This content is a little bit longer.
			// 				</p>
			// 				<p className="card-text">
			// 					<small className="text-muted">Last updated 3 mins ago</small>
			// 				</p>
			// 			</div>
			// 		</div>
			// 		<div className="card">
			// 			<img
			// 				src="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/57889.jpg"
			// 				className="card-img-top"
			// 				alt="..."
			// 			/>
			// 			<div className="card-body">
			// 				<h5 className="card-title">Card title</h5>
			// 				<p className="card-text">
			// 					This card has supporting text below as a natural lead-in to additional content.
			// 				</p>
			// 				<p className="card-text">
			// 					<small className="text-muted">Last updated 3 mins ago</small>
			// 				</p>
			// 			</div>
			// 		</div>
			// 		<div className="card">
			// 			<img
			// 				src="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/57889.jpg"
			// 				className="card-img-top"
			// 				alt="..."
			// 			/>
			// 			<div className="card-body">
			// 				<h5 className="card-title">Card title</h5>
			// 				<p className="card-text">
			// 					This is a wider card with supporting text below as a natural lead-in to additional
			// 					content. This card has even longer content than the first to show that equal height
			// 					action.
			// 				</p>
			// 				<p className="card-text">
			// 					<small className="text-muted">Last updated 3 mins ago</small>
			// 				</p>
			// 			</div>
			// 		</div>
			// 		<div className="card">
			// 			<img
			// 				src="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/57889.jpg"
			// 				className="card-img-top"
			// 				alt="..."
			// 			/>
			// 			<div className="card-body">
			// 				<h5 className="card-title">Card title</h5>
			// 				<p className="card-text">
			// 					This is a wider card with supporting text below as a natural lead-in to additional
			// 					content. This card has even longer content than the first to show that equal height
			// 					action.
			// 				</p>
			// 				<p className="card-text">
			// 					<small className="text-muted">Last updated 3 mins ago</small>
			// 				</p>
			// 			</div>
			// 		</div>
			// 	</div>
			// 	<div className="card-deck pt-2">
			// 		<div className="card">
			// 			<img
			// 				src="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/57889.jpg"
			// 				className="card-img-top"
			// 				alt="..."
			// 			/>
			// 			<div className="card-body">
			// 				<h5 className="card-title">Card title</h5>
			// 				<p className="card-text">
			// 					This is a longer card with supporting text below as a natural lead-in to additional
			// 					content. This content is a little bit longer.
			// 				</p>
			// 				<p className="card-text">
			// 					<small className="text-muted">Last updated 3 mins ago</small>
			// 				</p>
			// 			</div>
			// 		</div>
			// 		<div className="card">
			// 			<img
			// 				src="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/57889.jpg"
			// 				className="card-img-top"
			// 				alt="..."
			// 			/>
			// 			<div className="card-body">
			// 				<h5 className="card-title">Card title</h5>
			// 				<p className="card-text">
			// 					This card has supporting text below as a natural lead-in to additional content.
			// 				</p>
			// 				<p className="card-text">
			// 					<small className="text-muted">Last updated 3 mins ago</small>
			// 				</p>
			// 			</div>
			// 		</div>
			// 		<div className="card">
			// 			<img
			// 				src="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/57889.jpg"
			// 				className="card-img-top"
			// 				alt="..."
			// 			/>
			// 			<div className="card-body">
			// 				<h5 className="card-title">Card title</h5>
			// 				<p className="card-text">
			// 					This is a wider card with supporting text below as a natural lead-in to additional
			// 					content. This card has even longer content than the first to show that equal height
			// 					action.
			// 				</p>
			// 				<p className="card-text">
			// 					<small className="text-muted">Last updated 3 mins ago</small>
			// 				</p>
			// 			</div>
			// 		</div>
			// 		<div className="card">
			// 			<img
			// 				src="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/57889.jpg"
			// 				className="card-img-top"
			// 				alt="..."
			// 			/>
			// 			<div className="card-body">
			// 				<h5 className="card-title">Card title</h5>
			// 				<p className="card-text">
			// 					This is a wider card with supporting text below as a natural lead-in to additional
			// 					content. This card has even longer content than the first to show that equal height
			// 					action.
			// 				</p>
			// 				<p className="card-text">
			// 					<small className="text-muted">Last updated 3 mins ago</small>
			// 				</p>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}
