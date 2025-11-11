import { useState } from "react";
import CompareCard from "./CompareCard";
import CompareDetails from "./CompareDetails";
import Searchbar from "./Searchbar";

export default function Compare() {
    const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="w-full  bg-white">
      <Searchbar />
      <CompareCard />
      <h2 className="text-2xl font-bold px-[85px] mb-7 text-left">Compare</h2>
      <CompareDetails selected={selected} setSelected={setSelected} />
          <div className="flex justify-center fixed  h-fit bottom-3 mb-5 w-full"> 
        <button
          disabled={selected === null}
          className={`px-[400px] py-3 rounded-lg text-white font-semibold transition ${
            selected === null
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {selected === null ? "Select a Tour" : "Checkout "}
        </button>
      </div>
    </div>
  )
}
