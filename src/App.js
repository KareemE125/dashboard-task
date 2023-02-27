import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs.jsx'
import NotFound from './Pages/NotFound'
import './App.css';


const HOME_ROUTE = createBrowserRouter([
  {
    path: '/', element: <RootLayout/>, children: [
      { index: true, element: <Home /> },
      { index: '/about-us', element: <AboutUs /> },
      { path: '*', element: <NotFound /> },
    ]
  }
]);


export default function App() 
{

  useEffect(() => {
    console.log('====================================');
    console.log("DID APP MOUNT");
    console.log('====================================');
  }, [])

    return <RouterProvider router={HOME_ROUTE} />

}
