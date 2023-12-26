import React from "react";


import { Header } from "./header";
import { Container } from "./container";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid fondo">
			<Header/>
			<Container/>
		</div>
	);
};

export default Home;
