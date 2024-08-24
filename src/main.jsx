import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createHashRouter ,RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';

const router = createHashRouter ([
  { path:"/", element:<Home/>},
  { path:"*", element:<Error/>},
  { path:"/about", element:<About/>},
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
