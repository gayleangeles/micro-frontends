import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

window.renderApp = () => {
    const domElement =
        document.getElementById("react-app") ||
        document.querySelector("#react-app");

    if (domElement) {
        ReactDOM.render(<App />, domElement);
    }
};