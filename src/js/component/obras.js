import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export class Obras extends React.Component {
	render() {
		return (
			<div className="row obras " id="obras" style={{ backgroundColor: "transparent !important" }}>
				<div className="col-12 pt-4">
					<div className="container rounded py-4">
						<div className="row">
							<div className="col-12">
								<h2>Obras...</h2>
							</div>
						</div>
						<div className="row pt-4">
							<div className="col-12 pt-4">
								<div className="row">
									<div className="col-12 col-sm-3 ">
										<img
											src="http://1.bp.blogspot.com/-l7vkTs5HeFw/URi9-mzILAI/AAAAAAAAAX0/1zG6fTf93MI/s1600/Galeria%2Bpinturas%2Bespatula%2Boleo%2B%25284%2529.jpg"
											className="img-fluid w-100 img-obras rounded"
										/>
									</div>
									<div className="col-12 col-sm-3">
										<img
											src="http://3.bp.blogspot.com/-CKCekWgmqjE/TVo30FGWW6I/AAAAAAAAC1s/LVJBBGK3m_k/s1600/Leonid-afremov-friends-under-the-rain.jpg"
											className="img-fluid w-100 img-obras"
										/>
									</div>
									<div className="col-12 col-sm-3">
										<img
											src="https://i.pinimg.com/originals/b6/47/5c/b6475c3c5816dae2a2aab4eca8183c70.jpg"
											className="img-fluid w-100 img-obras"
										/>
									</div>
									<div className="col-12 col-sm-3">
										<img
											src="http://www.elecodejumilla.es/wp-content/uploads/2012/10/cromatica.jpg"
											className="img-fluid w-100 img-obras"
										/>
									</div>
								</div>
								<div className="row">
									<div className="col-12 col-md-3">
										<img
											src="http://1.bp.blogspot.com/-l7vkTs5HeFw/URi9-mzILAI/AAAAAAAAAX0/1zG6fTf93MI/s1600/Galeria%2Bpinturas%2Bespatula%2Boleo%2B%25284%2529.jpg"
											className="img-fluid w-100 img-obras"
										/>
									</div>
									<div className="col-12 col-md-3">
										<img
											src="http://3.bp.blogspot.com/-CKCekWgmqjE/TVo30FGWW6I/AAAAAAAAC1s/LVJBBGK3m_k/s1600/Leonid-afremov-friends-under-the-rain.jpg"
											className="img-fluid w-100 img-obras"
										/>
									</div>
									<div className="col-12 col-md-3">
										<img
											src="https://i.pinimg.com/originals/b6/47/5c/b6475c3c5816dae2a2aab4eca8183c70.jpg"
											className="img-fluid w-100 img-obras"
										/>
									</div>
									<div className="col-12 col-md-3">
										<img
											src="http://www.elecodejumilla.es/wp-content/uploads/2012/10/cromatica.jpg"
											className="img-fluid w-100 img-obras"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="row py-4">
							<div className="col-12 text-center">
								<Link to="/gallery">
									<button type="button" className="logo-comp">
										<h4>Galeria</h4>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
