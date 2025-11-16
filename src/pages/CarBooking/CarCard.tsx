
export default function CarCard({car}: {car: {name: string; image: string; version: string; seats: number; fuel: string}}) {
  return (
    <div>
             <div
              key={car.name}
              className="border p-4 rounded-lg hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center p-2">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-40 h-28 object-cover rounded"
                />
              </div>
              <p className="text-gray-600 flex justify-between px-2 mt-2">
                <span>{car.version}</span>
                <span>| {car.seats} Seats</span>
                <span>| {car.fuel}</span>
              </p>
              <div className="flex gap-4 mt-4">
                <button className="bg-[#1E429F] text-white w-1/2 px-4 py-2 rounded hover:bg-[#154194]">
                  Rent Now
                </button>
                <button className="text-[#1E429F] w-1/2 px-4 py-2 rounded border border-[#1E429F] hover:bg-[#E0E7FF]">
                  Details
                </button>
              </div>
            </div>
            
    </div>
  )
}
