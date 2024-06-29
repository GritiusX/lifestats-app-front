import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";

const app: HTMLElement = document.getElementById("root")! as HTMLElement;

const root = ReactDOM.createRoot(app);
root.render(
	// TODO ==> ADD: REACT ROUTER - REDUX
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
