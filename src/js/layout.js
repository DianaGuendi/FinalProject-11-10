import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import PropTypes from "prop-types";

import { About } from "./views/About";
import { Home } from "./views/home";
import { Services } from "./views/Services";
import { Tracking } from "./views/Tracking";

// import injectContext from "./store/appContext";
import { Navbart } from "./component/navbar";
import { Footer } from "./component/Footer";
import { MainBody } from "./component/MainBody";
import { Quotes } from "./views/Quotes";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				{/* <ScrollToTop> */}
				<Navbart />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/About">
						<About />
					</Route>
					<Route exact path="/Services">
						<Services />
					</Route>
					<Route path="/Tracking">
						<Tracking />
					</Route>
					<Route path="/Quotes">
						<Quotes />
					</Route>
				</Switch>
				<Footer />
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
