import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
      
        <div>
          <h2 className="text-xl font-semibold text-[#1E429F] mb-3">Safarni</h2>
          <p className="text-sm leading-relaxed">
            Explore the world with ease — flights, hotels, and tours all in one place.
          </p>
        </div>

     
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#1E429F]">Home</a></li>
            <li><a href="#" className="hover:text-[#1E429F]">Tours</a></li>
            <li><a href="#" className="hover:text-[#1E429F]">Cars</a></li>
            <li><a href="#" className="hover:text-[#1E429F]">Flight</a></li>
            <li><a href="#" className="hover:text-[#1E429F]">Hotels</a></li>
          </ul>
        </div>

 
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#1E429F]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#1E429F]">Help Center</a></li>
            <li><a href="#" className="hover:text-[#1E429F]">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#1E429F]">Privacy Policy</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#1E429F]"><Facebook size={20} /></a>
            <a href="#" className="hover:text-[#1E429F]"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#1E429F]"><Twitter size={20} /></a>
            <a href="#" className="hover:text-[#1E429F]"><Mail size={20} /></a>
          </div>
        </div>

      </div>

     
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} <span className="text-[#1E429F] font-semibold">Safarini</span>. All rights reserved.
      </div>
    </footer>
  );
}
