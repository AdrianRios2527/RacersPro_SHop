import React from "react";
import MyModal from "./modal";

import { Header } from "./header";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid  ">
			<MyModal/>
			<Header/>
			
		</div>
	);
};

export default Home;
