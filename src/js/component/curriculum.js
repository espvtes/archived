import React from "react";
import { Link } from "react-router-dom";
export class Curriculum extends React.Component {
	render() {
		return (
			<div id="curriculum">
				<div className="row py-4 curriculum">
					<div className="col-12 ">
						<h2 className="">Resumen Curricular</h2>
						<p className="">
							AThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
							interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are
							also reproduced in their exact original form, accompanied by English versions from the 1914
							translation by H. Rackham.
						</p>
						<p className="">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry is standard dummy text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen book. It has survived not only
							five centuries, but also the leap into electronic typesetting, remaining essentially
							unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
							Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
							PageMaker including versions of Lorem Ipsum.
						</p>
						<p className="">
							There are many variations of passages of Lorem Ipsum available, but the majority have
							suffered alteration in some form, by injected humour, or randomised words which do not look
							even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
							sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum
							generators on the Internet tend to repeat predefined chunks as necessary, making this the
							first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
							with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
							The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
							non-characteristic words etc.
						</p>
					</div>
				</div>
				<div className="last-btn text-center">
					<Link to="/trayectoria">
						<button type="button" className="btn btn-warning">
							CURRICULUM
						</button>
					</Link>
				</div>
				<hr />
			</div>
		);
	}
}
