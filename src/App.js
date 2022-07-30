import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Map from "./features/map/Map";

export default function App() {
    return (
        <div className="App">
            <Outlet />
            <Map />
        </div>
    );
}
