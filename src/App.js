import React from "react";
import "./style.css";


import Button from "./Button"

const App = () => {
	return (
		<div>
			<h2 className="middle">Hello World</h2>
			<Button title="App Store"/>
			<Button title="Play Store"/>
		</div>
	);
};

export default App;
