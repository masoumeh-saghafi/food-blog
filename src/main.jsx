import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import router from './routing/routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} ></RouterProvider>

)
