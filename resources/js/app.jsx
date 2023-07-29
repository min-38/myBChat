import './bootstrap';
import '../css/app.css'

import React from 'react'
// import { Route, Routes } from 'react-router-dom';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import Join from './components/Join'
import Chat from './components/Chat'

// const App = () => {
//     <Routes>
//         <Route path="/" element={<Join />} />
//         <Route path="about" element={<Chat />} />
//     </Routes>
// }

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" exact element={<Join />}>
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