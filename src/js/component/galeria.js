import React from "react";

export class Galeria extends React.Component {
	render() {
		return (
			<div className="container-fluid galeria">
				<div className="container galeria-body shadow rounded py-4 " style={{ backgroundColor: "#C6CBCC" }}>
					<div className="row ">
						<div className="col-12">
							<h3>Erika Kayne. Digital Collage</h3>
							<p>
								I am a paragraph. Click here to add your own text and edit me. It is easy. Just click
								“Edit Text” or double click me and you can start adding your own content and make
								changes to the font. Feel free to drag and drop me anywhere you like on your page. I am
								a great place for you to tell a story and let your users know a little more about you.
							</p>
							<br />
							<p>
								I am a paragraph. Click here to add your own text and edit me. It is easy. Just click
								“Edit Text” or double click me and you can start adding your own content and make
								changes to the font. Feel free to drag and drop me anywhere you like on your page. I am
								a great place for you to tell a story and let your users know a little more about you.
							</p>
						</div>
					</div>
					{/*<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-12 col-md-6 relation p-2 ">
									<img
										src="https://files.genial.guru/files/news/part_55/554810/2005310-whereverimayroam-1512147079-650-d8e386d660-1515540101.jpg"
										className="img-fluid w-100 h-100 rounded"
									/>
									<div className="row overlay">
										<div className="col-12">
											<h5 className="card-title">Card title</h5>
											<p className="card-text">
												This card has supporting text below as a natural lead-in to additional
												content.
											</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6 relation p-2 ">
									<img
										src="https://images.curiator.com/images/t_x/art/zxh0qbdwscvqlrbgnbfp/marco-grassi-blue-shawl.jpg"
										className="img-fluid w-100 h-100 rounded"
									/>
									<div className="overlay">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-6 relation p-2">
									<img
										src="https://files.genial.guru/files/news/part_55/554810/2005310-whereverimayroam-1512147079-650-d8e386d660-1515540101.jpg"
										className="img-fluid w-100 h-100 rounded"
									/>
									<div className="overlay">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
									</div>
								</div>
								<div className="col-12 col-md-6 relation p-2">
									<img
										src="https://images.curiator.com/images/t_x/art/zxh0qbdwscvqlrbgnbfp/marco-grassi-blue-shawl.jpg"
										className="img-fluid w-100 h-100 rounded"
									/>
									<div className="overlay">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-6 relation p-2">
									<img
										src="https://files.genial.guru/files/news/part_55/554810/2005310-whereverimayroam-1512147079-650-d8e386d660-1515540101.jpg"
										className="img-fluid w-100 h-100 rounded"
									/>
									<div className="overlay">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
									</div>
								</div>
								<div className="col-12 col-md-6 relation p-2">
									<img
										src="https://images.curiator.com/images/t_x/art/zxh0qbdwscvqlrbgnbfp/marco-grassi-blue-shawl.jpg"
										className="img-fluid w-100 h-100 rounded"
									/>
									<div className="row overlay">
										<div className="col-12">
											<h5 className="card-title">Card title</h5>
											<p className="card-text">
												This card has supporting text below as a natural lead-in to additional
												content.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-6 relation p-2">
									<img
										src="https://files.genial.guru/files/news/part_55/554810/2005310-whereverimayroam-1512147079-650-d8e386d660-1515540101.jpg"
										className="img-fluid w-100 h-100 rounded"
									/>
									<div className="overlay">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
									</div>
								</div>
								<div className="col-12 col-md-6 relation p-2">
									<img
										src="https://images.curiator.com/images/t_x/art/zxh0qbdwscvqlrbgnbfp/marco-grassi-blue-shawl.jpg"
										className="img-fluid w-100 h-100 rounded"
									/>
									<div className="overlay">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-6 relation p-2">
									<img
										src="https://files.genial.guru/files/news/part_55/554810/2005310-whereverimayroam-1512147079-650-d8e386d660-1515540101.jpg"
										className="img-fluid w-100 h-100 rounded"
									/>
									<div className="overlay">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
									</div>
								</div>
								<div className="col-12 col-md-6 relation p-2">
									<img
										src="https://images.curiator.com/images/t_x/art/zxh0qbdwscvqlrbgnbfp/marco-grassi-blue-shawl.jpg"
										className="img-fluid w-100 h-100 rounded"
									/>
									<div className="overlay">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>*/}
				</div>
			</div>
		);
	}
}
