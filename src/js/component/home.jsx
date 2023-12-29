import React, { useState } from "react";


import { Footer } from "./footer";
import { Header } from "./header";
import { AllProducts } from "./allProducts";


const Home = () => {


	return (
		<div className="container-fluid  ">

			<Header />

			<AllProducts/>

			<Footer/>
		</div>
	);
};

export default Home;
