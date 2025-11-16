// import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// pages
import App from '@/App.tsx'

// Lazily-loaded pages
import { authRoutes } from './authRoutes';
import { Home } from '@/pages/Home/Home';

import CarBooking from '@/pages/CarBooking/CarBooking';
import SingleCar from '@/pages/CarBooking/SingleCar';
import MyMap from '@/pages/Map/Map';
import Payment from '@/pages/Payment/Payment';
import Compare from '@/pages/Compare/Compare';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
      path: '/',
      element: <Home/>,
    },
    {
      path: 'car-booking',
      element: <CarBooking />
    },
    {
      path:"compare",
      element:<Compare />
    },
    {
      path:"single-car",
      element:<SingleCar />
    },
    {
      path: "map",
      element: <MyMap  />
    },
    {
      path: "payment",
      element: <Payment />
    },
    ...authRoutes
  ]
  }
]);