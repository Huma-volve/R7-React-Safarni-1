// import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// pages
import App from '@/App.tsx'
import Home from '@/pages/Home';
// Lazily-loaded pages
import { authRoutes } from './authRoutes';
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
        index: true,
        element: <Home />
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
        element: <MyMap />
      },
      ...authRoutes
    ]
  }
]);