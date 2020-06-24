import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import App2 from "./LifeCycleDemo/App2";

const element = <h1> Hello Javascript , {2 + 7}</h1>;

const content1 = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(content1, document.getElementById("root"));
