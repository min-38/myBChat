import React from 'react';
import {
    createBrowserRouter as Router,
    createRoutesFromElements as Elements,
    Route,
    RouterProvider
} from "react-router-dom";
import AuthForm from './components/Auth/AuthForm'
import Chat from './components/Chat/Chat'


const router = Router(
    Elements(
        <>
            <Route path="/" element={<AuthForm type='login' />}>
                <Route path="/chat" element={<Chat />} />
            </Route>
            <Route path="/signup" element={<AuthForm type='signup' />} />
        </>
    )
);

export default router;