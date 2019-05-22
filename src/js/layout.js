import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Galeria } from "./component/galeria.js";
import { Trayectoria } from "./component/trayectoria.js";
import { Procesos } from "./component/procesos.js";
import { Sample } from "./component/sample.js";
import injectContext from "./store/appContext";

// import { Navbar } from "./component/navbar";
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
						{/*<Navbar href="#id" />*/}
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/demo" component={Demo} />
							<Route path="/galeria" component={Galeria} />
							<Route path="/trayectoria" component={Trayectoria} />
							<Route path="/sample" component={Sample} />
							<Route path="/procesos" component={Procesos} />
							<Route path="/single/:theid" component={Single} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						{/*<Footer />*/}
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
