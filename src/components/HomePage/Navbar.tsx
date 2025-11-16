import { useState } from "react";
import { Search, UserCircle, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useLocation } from "react-router-dom";
import logo from "/logo.svg";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full border-b border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
  
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="w-14 h-17 sm:w-17" />
        </div>

      
        <div className="hidden md:flex space-x-15 text-sm font-medium text-gray-700 dark:text-gray-200">
           
          <a href="#" className={`flex items-center space-x-1 ${location.pathname === "/" ? "text-[#1E429F]" : "text-gray-700 dark:text-gray-200 hover:text-[#1E429F]"
          }`}>
             <span className="text-lg">Home</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-[#1E429F]">
            <span className="text-lg">Favorite</span>
          </a>
          <a href="/compare" className="flex items-center space-x-1 hover:text-[#1E429F]">
            <span className="text-lg">Compare</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-[#1E429F]">
            <span className="text-lg">Maps</span>
          </a>
        </div>

 
        <div className="flex items-center space-x-4">
        

<button
  onClick={() => setShowSearch((prev) => !prev)}
  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-transform duration-300"
>
  {showSearch ? (
    <X size={22} className="transform rotate-90 transition-all duration-300" />
  ) : (
    <Search size={22} className="transition-all duration-300" />
  )}
</button>


{showSearch && (
  <input
    type="text"
    placeholder="Search..."
    autoFocus
    className="transition-all duration-300 w-40 md:w-64 rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
)}



          <button title="User Profile" className="text-gray-600 hover:text-blue-600 dark:text-gray-300">
            <UserCircle size={26} />
          </button>

       
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button title="Menu" className="text-gray-600 hover:text-blue-600 dark:text-gray-300">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white dark:bg-gray-900">
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold text-blue-600">MyLogo</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col space-y-4 text-gray-700 dark:text-gray-200">
                  <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
                   <span>Home</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
                    <span>Favorite</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
                     <span>Compare</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
                   <span>Maps</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
