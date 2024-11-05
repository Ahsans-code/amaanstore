import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Mystore from './pages/Mystore.jsx';
import Application from './pages/Application.jsx';
import UI from './pages/UI.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/Dashboards",
      element: <Home />,
    },
    {
      pah:'/My Store',
      element:<Mystore/>
    },
    {
      pah:'/Application',
      element:<Application/>
    },
    {
      pah:'/UI',
      element:<UI/>
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
