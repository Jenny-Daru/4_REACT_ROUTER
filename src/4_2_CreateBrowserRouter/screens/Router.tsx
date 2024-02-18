import React from 'react';
import Root from "../Root"
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';

// createBrowserRouter: Router를 array 형식으로 표현할 수 있게 해준다
// "/"는 부모의 역할을 한다.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    }
]);

export default router;
