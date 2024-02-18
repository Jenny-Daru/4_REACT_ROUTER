import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from "../Root"
import About from './About';
import ErrorComponent from '../components/ErrorComponent';
import NotFound from '../components/NotFound';
import Home from './Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
        errorElement: <NotFound />,
    }
]);

export default router;
