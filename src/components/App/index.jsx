import React from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider} from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';
import { JourneyPicker } from '../JourneyPicker';
// import { useEffect, useState } from 'react';

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router}/>
    <Footer />
  </>
);
  const router= createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/reservation',
      element: < Reservation />,
    },
  ]);
createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);