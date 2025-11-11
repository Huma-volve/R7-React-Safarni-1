import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from '@/routes/route'
import { RouterProvider } from 'react-router-dom'
import '@/styles/index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from 'sonner'

const queryClient = new QueryClient();

const toasterStyle: React.CSSProperties & Record<string, string> = {
  // "--normal-bg": "",
  "--normal-text": "var(--primary-700)",
  "--normal-border": "var(--primary-700)",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster duration={4000} style={toasterStyle} />
    </QueryClientProvider>
  </StrictMode>,
)
