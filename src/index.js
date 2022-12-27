import React from "react";
import ReactDOM from "react-dom/client";
import Block6 from "./components/Block6/Block6";
import Block7 from "./components/Block7/Block7";
import Block8 from "./components/Block8/Block8";
import "./index.scss";

import "./font/TTHoves-DemiBold.ttf";
import "./font/TTHoves-Medium.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Block6 />
		<Block7 />
		<Block8 />
	</React.StrictMode>
);
