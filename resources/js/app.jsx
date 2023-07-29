import './bootstrap';
import '../css/app.css'
import "bootstrap/dist/css/bootstrap.min.css"

import React from 'react'
import {
    createBrowserRouter as Router,
    createRoutesFromElements as Elements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';

import Login from './components/Auth/Login'
import Chat from './components/Chat/Chat'

// const App = () => {
//     <Routes>
//         <Route path="/" element={<Join />} />
//         <Route path="about" element={<Chat />} />
//     </Routes>
// }

const router = Router(
    Elements(
        <Route path="/" exact element={<Login />}>
            <Route path="dashboard" element={<Chat />} />
        </Route>
    )
);

createRoot(document.getElementById('myApp')).render(     
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

export default App