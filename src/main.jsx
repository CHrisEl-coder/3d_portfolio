import * as React from 'react';
import * as ReactDom from 'react-dom/client';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'

import App from './routes/App'
import ErrorPage from './ErrorPage';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Home from './Pages/Home';

const route = createBrowserRouter(
    [
        {
            path: "/",
            element:<App />,
            errorElement: <ErrorPage />,
            children: [{
                path: '/',
                element: <Home />
            },

            {
                path: 'contact',
                element: <Contact />
            },

            {
                path: 'about',
                element: <About />
            },

            {
                path: 'projects',
                element: <Projects />
            }
        
        ],
        },
    ]
)

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={route} />
    </React.StrictMode>
)