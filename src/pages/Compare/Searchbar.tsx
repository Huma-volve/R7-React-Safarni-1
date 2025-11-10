import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
      const navigate = useNavigate();
    return (
    <div className="w-full h-11 mt-[50px] flex px-[85px] gap-4 ">
        <div className="">
            <button  onClick={()=>navigate("/")} title="Go back" className="p-2 h-11 w-10 rounded-full hover:bg-gray-200 bg-[#F3F4F6]">
                <FiArrowLeft size={24} />
            </button>
        </div>
        <div className="flex-1 border rounded-md bg-white flex w-full">
            <div className="flex items-center w-full bg-white rounded-lg px-4 gap-2">   
                 <div
        className="relative flex items-center  text-2xl bg-white rounded-lg px-3  w-full sm:w-[568px]   md:mb-0"
      >
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          
          className="bg-transparent outline-none w-full text-[17px] text-gray-700"
        />
       
        
      </div>
      </div>
    </div>
    </div>
  );
}
