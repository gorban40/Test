import React from "react";
import ReactDOM from "react-dom/client";
import Section from "./components/Section/Section";
import "./index.scss";

import "./font/TTHoves-DemiBold.ttf";
import "./font/TTHoves-Medium.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Section></Section>
	</React.StrictMode>
);
