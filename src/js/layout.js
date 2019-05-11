import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Gallery } from "./views/gallery.js";
import { Galeria } from "./component/galeria.js";
import { Procesos } from "./component/procesos.js";
import { Proyectos } from "./component/proyectos.js";
import { Trayectoria } from "./component/trayectoria.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Navbar href="#id" />{" "}
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/demo" component={Demo} />
							<Route path="/gallery" component={Gallery} />
							<Route path="/trayectoria" component={Trayectoria} />
							<Route path="/procesos" component={Procesos} />
							<Route path="/proyectos" component={Proyectos} />
							<Route path="/galeria" component={Galeria} />
							<Route path="/single/:theid" component={Single} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
