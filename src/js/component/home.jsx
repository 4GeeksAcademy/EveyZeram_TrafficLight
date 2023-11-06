import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [pickColor, setPickColor] = useState("red");
	return (
			<div className="traffic-light">
			<div onClick={() => setPickColor("red")} className={"light red" + (pickColor === "red" ? " glow" : "")}></div>
			<div onClick={() => setPickColor("yellow")} className={"light yellow" + (pickColor === "yellow" ? " glow" : "")}></div>
			<div onClick={() => setPickColor("green")} className={"light green" + (pickColor === "green" ? " glow" : "")}></div>
		</div>
	);
};

export default Home;
