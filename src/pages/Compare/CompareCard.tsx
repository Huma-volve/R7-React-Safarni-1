
export default function CompareCard() {
    const Data =[
  {
    "title": "Santorini, Greece",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "description": "Famous for its whitewashed buildings and stunning sunsets, Santorini offers breathtaking views of the Aegean Sea and charming cliffside villages.",
    "price": "$120 ",
    "opening_hours": " 8:00 AM – 8:00 PM"
  },
  {
    "title": "Kyoto, Japan",
    "image": "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
    "description": "Kyoto is a timeless city filled with ancient temples, peaceful gardens, and traditional teahouses that showcase Japan’s rich cultural heritage.",
    "price": "$25 ",
    "opening_hours": " 9:00 AM – 5:00 PM"
  },
  {
    "title": "Banff National Park, Canada",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "description": "Located in the Canadian Rockies, Banff offers turquoise lakes, snow-capped peaks, and abundant wildlife for nature lovers and adventurers alike.",
    "price": "$10 ",
    "opening_hours": "Open 24 hours"
  },
  {
    "title": "Marrakech, Morocco",
    "image": "https://images.unsplash.com/photo-1503264116251-35a269479413",
    "description": "A vibrant city where colorful souks, historic palaces, and the aroma of spices fill the air, offering an unforgettable sensory experience.",
    "price": "$15 ",
    "opening_hours": " 9:00 AM – 9:00 PM"
  },
  {
    "title": "Paris, France",
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    "description": "The City of Light enchants visitors with its art, fashion, café culture, and iconic landmarks like the Eiffel Tower and the Louvre Museum.",
    "price": "$20–$40 ",
    "opening_hours": " 10:00 AM – 6:00 PM"
  },
  {
    "title": "Bali, Indonesia",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "description": "Known for its lush jungles, volcanic mountains, and tranquil beaches, Bali is a spiritual and scenic paradise for travelers seeking relaxation and adventure.",
    "price": "$80 ",
    "opening_hours": " 7:00 AM – 7:00 PM"
  }
]

  return (
    <div className="w-full px-20 py-10  mt-5 grid grid-rows-3 grid-cols-2 gap-x-5 gap-y-1  bg-white " >
      {Data.map((item, index) => (
        <div key={index} className="mb-4 p-4 bg-[#FAFAFA] shadow-lg flex rounded-lg ">
            <div>
            <img src={item.image} alt={item.title} className="w-45 h-40 object-cover rounded-md " />
            </div>
           <div className="pl-4 w-full">
             <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-500 text-sm  font-semibold mb-1">{item.opening_hours} | {item.price}</p>
            <p className="text-gray-700 mb-2 text-sm font-sm">{item.description}</p>
           </div>
        </div >
      ))}
    </div>
  )
}
