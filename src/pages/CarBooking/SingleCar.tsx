import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SingleCar() {
    const navigate = useNavigate();
  return (
    <div className="w-full h-full px-[85px]">
        <button  onClick={()=>navigate("/")} title="Go back" className="p-2 h-11 w-10 rounded-full hover:bg-gray-200 bg-[#F3F4F6]">
                    <FiArrowLeft size={24} />
        </button>
        <div className="mt-6 grid grid-cols-2 gap-4 w-full ">
            <>
            <img className="w-full h-auto " 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" alt="car"></img>
            </>
            <div>
                <h3 className="text-lg font-semibold mb-4">
                    Popular Cars
                </h3>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="border p-4 rounded-lg flex flex-col gap-1 justify-center items-center"> 
                        <p className="font-semibold text-lg">power</p>
                        <p className="text-gray-200 text-md">150hp</p>
                    </div>
                    <div className="border p-4 rounded-lg flex flex-col gap-1 justify-center items-center">
                        <p className="font-semibold text-lg">Max speed</p>
                        <p className="text-gray-200 text-md">180km/h</p>

                    </div>
                    <div className="border p-4 rounded-lg flex flex-col gap-1 justify-center items-center">
                            <p className="font-semibold text-lg">Acceleration</p>
                            <p className="text-gray-200 text-md">9.5s</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}
