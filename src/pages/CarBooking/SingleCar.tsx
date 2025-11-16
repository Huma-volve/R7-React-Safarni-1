import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SingleCar() {
    const navigate = useNavigate();
  return (
    <div className="w-full h-full px-[85px]">
        <button  onClick={()=>navigate("/")} title="Go back" className="p-2 h-11 w-10 rounded-full hover:bg-gray-200 bg-[#F3F4F6]">
                    <FiArrowLeft size={24} />
        </button>
        <div className="mt-6 grid grid-cols-2 gap-4 text-[#111928]  w-full ">
            < div className="flex w-[90%] rounded-3xl overflow-hidden h-screen flex-col">
            <img className="w-full h-full me-10" 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" alt="car"></img>
            </div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">
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
                    <div className="w-full flex  flex-col mt-4 col-span-3">
                        <p className="font-semibold text-3xl text-[#111928]   capitalize mb-3">plans</p>
                        <button className="flex  gap-2 mt-2 w-full border rounded-lg border-[#D1D5DB]">
                                <div className=" flex justify-between gap-1 w-full  " title="hourly">
                                    <div className="flex  flex-col gap-2 px-10 py-3 w-[25%] bg-[#F3F4F6] items-center">
                                        
                                        <img src="public/clock.png" alt="sedan plan" className="w-12   rounded-lg p-2 "></img>
                                        <p className="text-center  text-bold">10$</p>
                                    </div>
                                    <div className="flex flex-col items-start justify-center  w-[70%] px-4 rounded-r-lg text-black font-[poppins] ">
                                       <h2 className="font-medium text-[#111928]  text-[24px]">Hourly Rent</h2>
                                        <p className="text-[#6B7280] text-[19px]">Best for business appointments</p>
                                    </div>
                                </div>  
                          </button>
                           <button title="daily" className="flex  gap-2 mt-6 w-full border rounded-lg border-[#D1D5DB]">
                                <div className=" flex justify-between gap-1 w-full  " title="hourly">
                                    <div className="flex  flex-col gap-2 px-10 py-3 w-[25%] bg-[#F3F4F6] items-center">
                                        
                                        <img src="public/rentdaily.png" alt="sedan plan" className="w-12   rounded-lg p-2 "></img>
                                        <p className="text-center  text-bold">80$</p>
                                    </div>
                                    <div className="flex flex-col items-start justify-center  w-[70%] px-4 rounded-r-lg text-black font-[poppins] ">
                                       <h2 className="font-medium text-[#111928]  text-[24px]">Hourly Rent</h2>
                                        <p className="text-[#6B7280] text-[19px]">Best for business appointments</p>
                                    </div>
                                </div>  
                          </button>
                                                  
                            <p className="font-semibold text-3xl text-[#111928]  mt-6 capitalize mb-3">location</p>
                            <button className="flex  gap-2 mt-2 mb-5 w-full border rounded-lg border-[#D1D5DB]" onClick={()=>navigate("/map")}>
                                <p className="text-center  p-2  text-bold">View on Map</p>
                            </button>
                                <button
                        
                            onClick={() => {navigate("/payment");
                              console.log("pick up done");

                            }}
                             className="w-full mt-3 font-semibold  text-white bg-[#1E429F] py-2 rounded-lg font-[poppins] font-semibol capitalize text-lg "
                          >
                            Pick Up
                          </button>
                            

                          
                          
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}
