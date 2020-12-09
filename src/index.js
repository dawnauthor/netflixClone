import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
// or import { render } from 'react-dom'; change ReactDOM.render below to just 'render'
import App from "./app";
import { GlobalStyles } from "./global-styles";
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById("root")
);
