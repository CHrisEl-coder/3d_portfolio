import * as React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './routes/App'
import ErrorPage from './ErrorPage';
import { Loader } from './Components';
import { Contact, Projects, About } from './Pages';
const route = createBrowserRouter(
    [
        {
            path: "/",
            element:<App />,
            errorElement: <ErrorPage />,
            children: [

                {
                    path: "contact",
                    element: <Contact />
                }, 
                
                {
                    path: "about",
                    element: <About />
                },

                {
                    path: "projects",
                    element: <Projects />
                }
            ]
        }
     
    ]
)

const root = createRoot(document.getElementById('root'))

root.render(
      <RouterProvider router={route} fallbackElement = {<Loader/>} />
)