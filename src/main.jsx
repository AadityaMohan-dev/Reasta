import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Agents from './components/Agents/Agents.jsx'
import PropertyDetails from './components/PropertyDetails/PropertyDetails.jsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import Listing from './components/Listsing/Listing.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path : "property-details",
        element : <PropertyDetails/>,
        errorElement:<ErrorBoundary/>
      },
      {
        path : '',
       element : <LandingPage/>,
       errorElement:<ErrorBoundary/>
      },
      {
        path :'agents',
       element : <Agents/>,
       errorElement:<ErrorBoundary/>
      },
      {
        path :'listing',
       element : <Listing/>,
       errorElement:<ErrorBoundary/>
      },
      {
        path :'property',
        element:<PropertyDetails/>,
        errorElement:<ErrorBoundary/>
      },
      {
        path :'blog',
       
       errorElement:<ErrorBoundary/>
      },

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);