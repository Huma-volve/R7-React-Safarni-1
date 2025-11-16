
import { Outlet } from "react-router-dom"
import Footer from "@/components/HomePage/Footer"
import Navbar from "@/components/HomePage/Navbar"

import { useLocation } from "react-router-dom"



export default function App() {
  const location = useLocation();
  const hideNavbarOn = ["/onboarding", '/login', '/signup','/map', '/forget-password', '/new-password', '/otp', '/success'];
  const shouldHideNavbar = hideNavbarOn.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <main className={`flex flex-col ${!shouldHideNavbar && 'my-8'}`}>
        {!shouldHideNavbar && <Navbar />}
        <Outlet />
        {!shouldHideNavbar && <Footer />}
      </main>
    )
}