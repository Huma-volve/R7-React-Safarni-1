import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from '@/routes/route'
import { RouterProvider } from 'react-router-dom'
import '@/styles/index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
