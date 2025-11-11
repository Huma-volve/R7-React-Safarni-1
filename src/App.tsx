import { Outlet } from "react-router-dom"
import Footer from "@/components/HomePage/Footer"
import Navbar from "@/components/HomePage/Navbar"

export default function App() {
  return (
      <main className="flex flex-col gap-10 mx-2 md:mx-4 my-8">
        <Navbar />
        <Outlet />
        <Footer /> 
      </main>
    )
}