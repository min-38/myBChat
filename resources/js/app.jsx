import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./router";

import './bootstrap';
import '../css/app.css'

class App extends Component {
    render() {
        return(
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        );
    }
}

createRoot(document.getElementById('app')).render(     
    <App />
);