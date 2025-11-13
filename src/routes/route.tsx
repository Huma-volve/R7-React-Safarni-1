// import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// pages
import App from '@/App.tsx'

// Lazily-loaded pages
import { authRoutes } from './authRoutes';
import { Home } from '@/pages/Home/Home';

import CarBooking from '@/pages/CarBooking/CarBooking';
import Compare from '@/pages/Compare/Compare';
import SingleCar from '@/pages/CarBooking/SingleCar';
import MyMap from '@/pages/Map/Map';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
      path: '/',
      element: <Home/>
      },...authRoutes

      
    ]
  }
]);