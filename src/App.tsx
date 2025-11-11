import { Outlet, useLocation } from "react-router-dom"
import Footer from "@/components/reusable/Footer"
import Navbar from "@/components/reusable/Navbar"

export default function App() {
  const location = useLocation();
  const hideNavbarOn = ["/onboarding", '/login', '/signup', '/forget-password', '/new-password', '/otp', '/success'];
  const shouldHideNavbar = hideNavbarOn.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <main className={`flex flex-col gap-10 mx-2 md:mx-8 ${!shouldHideNavbar && 'my-8'}`}>
        {!shouldHideNavbar && <Navbar />}
        <Outlet />
        {!shouldHideNavbar && <Footer />}
      </main>
    )
}