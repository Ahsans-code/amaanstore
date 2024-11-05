import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Mystore from './pages/Mystore.jsx';
import Application from './pages/Application/Application.jsx';
import UI from './pages/UI.jsx';
import Menu from './pages/Menu.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/Dashboard",
      element: <Home />,
    },
    {
      path:'/My Store',
      element:<Mystore/>
    },
    {
      path:'Application',
      element:<Application/>
    },
    {
      path:'/UI',
      element:<UI/>
    }
    ,
    {
      path:'/Menu',
      element:<Menu/>
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
