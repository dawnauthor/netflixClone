import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
// or import { render } from 'react-dom'; change ReactDOM.render below to just 'render'
import App from "./app";
import { GlobalStyles } from "./global-styles";

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById("root")
);
