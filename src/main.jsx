import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/home';
import Error from './pages/Error';

const router = createBrowserRouter([
  { path:"/", element:<Home/>},
  { path:"*", element:<Error/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
