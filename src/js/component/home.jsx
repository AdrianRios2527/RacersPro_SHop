import React from "react";

import { Footer } from "./footer";
import { Header } from "./header";
import { AllProducts } from "./allProducts";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid  ">

			<Header/>
			<AllProducts/>
			<Footer/>
		</div>
	);
};

export default Home;
