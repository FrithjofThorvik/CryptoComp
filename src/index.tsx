import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import App from "./App";

import "./index.scss";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
