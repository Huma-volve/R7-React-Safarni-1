// import { useState } from "react";

// export default function Brands() {
//   const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
//  const brandsData = [
//   {
//     name: "Mercedes-Benz",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//     cars: [
//       {
//         name: "Mercedes G-Class",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Automatic",
//         fuel: "Petrol",
//         seats: 5,
//       },
//       {
//         name: "Mercedes C-Class",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Manual",
//         fuel: "Diesel",
//         seats: 5,
//       },
//     ],
//   },
//   {
//     name: "BMW",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//     cars: [
//       {
//         name: "BMW M4",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Automatic",
//         fuel: "Petrol",
//         seats: 4,
//       },
//       {
//         name: "BMW X5",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Automatic",
//         fuel: "Diesel",
//         seats: 7,
//       },
//     ],
//   },
//   {
//     name: "Porsche",
//     image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
//     cars: [
//       {
//         name: "Porsche 911",
//     image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
//         version: "Automatic",
//         fuel: "Petrol",
//         seats: 2,
//       },
//       {
//         name: "Porsche Cayenne",
//     image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
//         version: "Automatic",
//         fuel: "Diesel",
//         seats: 5,
//       },
//     ],
//   },
//   {
//     name: "Jeep",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//     cars: [
//       {
//         name: "Jeep Wrangler",
//         image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Manual",
//         fuel: "Diesel",
//         seats: 5,
//       },
//       {
//         name: "Jeep Compass",
//     image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
//         version: "Automatic",
//         fuel: "Petrol",
//         seats: 5,
//       },
//     ],
//   },
//   {
//     name: "Subaru",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//     cars: [
//       {
//         name: "Subaru Outback",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Manual",
//         fuel: "Petrol",
//         seats: 5,
//       },
//       {
//         name: "Subaru Forester",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Automatic",
//         fuel: "Diesel",
//         seats: 5,
//       },
//     ],
//   },
//   {
//     name: "Renault",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//     cars: [
//       {
//         name: "Renault Clio",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Manual",
//         fuel: "Petrol",
//         seats: 5,
//       },
//       {
//         name: "Renault Megane",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Automatic",
//         fuel: "Diesel",
//         seats: 5,
//       },
//     ],
//   },
//   {
//     name: "Geely",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//     cars: [
//       {
//         name: "Geely Coolray",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Automatic",
//         fuel: "Petrol",
//         seats: 5,
//       },
//       {
//         name: "Geely Tugella",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         version: "Automatic",
//         fuel: "Diesel",
//         seats: 5,
//       },
//     ],
//   },
// ];


//     return (
//     <div className="px-[85px] ">
//         <h3 className="text-3xl font-medium my-10  capitalize">
//             brands
//         </h3>
//         <div className="flex">
//             {brandsData.map((brand)=>(
//                 <div key={brand.name} onClick={() => setSelectedBrand(brand.name)} className="flex justify-between w-full items-center gap-8 mb-6">
//                     <div className="flex flex-col border shadow-sm hover:border-[#1E429F] hover:shadow-[#1E429F] items-center gap-1 cursor-pointer hover:bg-gray-100 p-4 rounded-lg">
//                     <img src={brand.image} alt={brand.name} className="w-30 h-30 rounded-full object-cover"/>
//                     <div>
//                         <h4 className=" font-bold text-lg">{brand.name}</h4>
//                         <p className="text-[18px]  text-[#1E429F]  text-center font-bold">+{brand.cars.length} </p>
//                   </div>
//                     </div>
//                 </div>
//             ))}

//             </div>
//             <div>
//             {selectedBrand && (
//                 <div className="mt-8">
//                     <h3 className="text-2xl font-semibold mb-7">{selectedBrand} Popular Cars</h3>
//                     <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:w-full  gap-6">
//                         {brandsData.find(brand => brand.name === selectedBrand)?.cars.map((car) => (
//                             <div key={car.name} className="border p-4 rounded-lg">
//                                 <div className="flex justify-between p-4">
//                                   <h3 className="text-lg font-semibold  "> {car.name}</h3>
//                                   <img src={car.image} alt={car.name} className="w-100 h-40 object-cover mb-2"/>
//                                   </div>
//                                   <div>
//                                     <p  className="text-gray-600 ps-4 pe-20 w-full flex justify-between">
//                                       <span>{car.version}</span>  
//                                       <span> |  {car.seats} Seats</span>
//                                       <span> |  {car.fuel}</span>
//                                       </p>
//                                   </div>
//                               <div className="flex items-center  w-full">
//                                   <button className="bg-[#1E429F] cursor-pointer text-white w-[50%] px-4 py-2 rounded mt-4 hover:bg-[#154194]">
//                                     Rent Now
//                                 </button>
//                                 <button className="ml-4 text-[#1E429F] cursor-pointer w-[50%] px-4 py-2 rounded mt-4 border border-[#1E429F] hover:bg-[#E0E7FF]">
//                                   Details
//                                 </button>
//                                 </div>
//                         </div>
//                         ))}
//                     </div>

//                 </div>
//             )}
//         </div>
//     </div>
//   )
// }

import { useState, useEffect, useMemo } from "react";

interface Car {
  name: string;
  image: string;
  version: string;
  fuel: string;
  seats: number;
  brandName?: string;
}

interface Brand {
  name: string;
  image: string;
  cars: Car[];
}

export default function Brands() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [randomCars, setRandomCars] = useState<Car[]>([]);

  const brandsData: Brand[] = useMemo(
    () => [
    {
      name: "Mercedes-Benz",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      cars: [
        {
          name: "Mercedes G-Class",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
          version: "Automatic",
          fuel: "Petrol",
          seats: 5,
        },
        {
          name: "Mercedes C-Class",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
          version: "Manual",
          fuel: "Diesel",
          seats: 5,
        },
      ],
    },
    {
      name: "BMW",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      cars: [
        {
          name: "BMW M4",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
          version: "Automatic",
          fuel: "Petrol",
          seats: 4,
        },
        {
          name: "BMW X5",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
          version: "Automatic",
          fuel: "Diesel",
          seats: 7,
        },
      ],
    },
    {
      name: "Porsche",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      cars: [
        {
          name: "Porsche 911",
          image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
          version: "Automatic",
          fuel: "Petrol",
          seats: 2,
        },
        {
          name: "Porsche Cayenne",
          image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
          version: "Automatic",
          fuel: "Diesel",
          seats: 5,
        },
      ],
    },
  ],[]);

  // Generate random cars when component mounts
  useEffect(() => {
    const allCars: Car[] = brandsData.flatMap((brand) =>
      brand.cars.map((car) => ({
        ...car,
        brandName: brand.name,
      }))
    );

    // Pick 4 random cars
    const shuffled = [...allCars].sort(() => 0.5 - Math.random());
    setRandomCars(shuffled.slice(0, 4));
  }, [brandsData]);

  const carsToShow: Car[] = selectedBrand
    ? brandsData.find((b) => b.name === selectedBrand)?.cars || []
    : randomCars;

  const title = selectedBrand
    ? `${selectedBrand} Popular Cars`
    : "Popular Cars";

  return (
    <div className="px-[85px]">
      <h3 className="text-3xl font-medium my-10 capitalize">brands</h3>

      {/* Brand list */}
      <div className="flex flex-wrap gap-6">
        {brandsData.map((brand) => (
          <div
            key={brand.name}
            onClick={() => setSelectedBrand(brand.name)}
            className="flex flex-col border shadow-sm hover:border-[#1E429F] hover:shadow-[#1E429F] items-center gap-1 cursor-pointer hover:bg-gray-100 p-4 rounded-lg w-[150px]"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <h4 className="font-bold text-lg text-center">{brand.name}</h4>
            <p className="text-[16px] text-[#1E429F] font-bold">
              +{brand.cars.length}
            </p>
          </div>
        ))}
      </div>

      {/* Cars Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-7">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {carsToShow.map((car) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
