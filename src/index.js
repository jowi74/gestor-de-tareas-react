import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <
    React.StrictMode >
    <
    AuthProvider >
    <
    TaskProvider >
    <
    App / >
    <
    /TaskProvider> <
    /AuthProvider> <
    /React.StrictMode>
);