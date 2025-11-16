import { useNavigate } from "react-router-dom";

export default function ReturnHome() {
  const navigate = useNavigate();
    return (
       <div className="">
            <button  onClick={()=>navigate(-1)} title="Go back" className="p-2 h-11 w-10 rounded-full hover:bg-gray-200 bg-[#F3F4F6]">
                <img src="Arrow - Left 2.png" alt="home icon" className="h-6 w-6 m-auto"/>
            </button>
        </div>
  )
}
