import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Counter from "./features/counter/Counter";
import About from "./features/about/About";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ResponsiveAppBar } from "./features/header/ResponsiveAppBar";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ResponsiveAppBar />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<App />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="*"
                        element={
                            <div>
                                <h2>404 Page not found etc</h2>
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
