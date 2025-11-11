// import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// pages
import App from '@/App.tsx'

// Lazily-loaded pages
import { authRoutes } from './authRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
      
      },...authRoutes

      
    ]
  }
]);