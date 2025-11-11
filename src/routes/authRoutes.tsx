import { Navigate } from "react-router-dom";
import { lazy, Suspense } from 'react';
// pages
import Onboarding from '@/pages/auth/Onboarding';
import LogIn from '@/pages/auth/LogIn';
import SignUp from '@/pages/auth/SignUp';
import PageSkeleton from "@/components/reusable/PageSkeleton";

const ForgetPassword = lazy(() => import('@/pages/auth/ForgetPassword'))
const OTP = lazy(() => import('@/pages/auth/OTP'))
const NewPassword = lazy(() => import('@/pages/auth/NewPassword'))
const ResetPasswordSuccess = lazy(() => import('@/pages/auth/ResetPasswordSuccess'))

const seen = localStorage.getItem("onboardingSeen") === "true";

export const authRoutes = [
  {
    path: 'onboarding',
    element: seen ? <Navigate to="/" replace /> : <Onboarding />
  },
  {
    path: 'login',
    element: <LogIn />
  },
  {
    path: 'signup',
    element: <SignUp />
  },
  {
    path: 'forget-password',
    element: <Suspense fallback={<PageSkeleton />}>
        <ForgetPassword />
      </Suspense>
  },
  {
    path: 'otp',
    element: <Suspense fallback={<PageSkeleton />}>
        <OTP />
      </Suspense>
  },
  {
    path: 'new-password',
    element: <Suspense fallback={<PageSkeleton />}>
        <NewPassword />
      </Suspense>
  },
  {
    path: 'success',
    element: <Suspense fallback={<PageSkeleton />}>
        <ResetPasswordSuccess />
      </Suspense>
  },
];
