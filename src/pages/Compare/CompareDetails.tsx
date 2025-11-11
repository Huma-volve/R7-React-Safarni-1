import { FiCheck } from "react-icons/fi";

type CompareDetailsProps = {
  selected: number | null;
  setSelected: (index: number) => void;
};

export default function CompareDetails({ selected, setSelected }: CompareDetailsProps) {
  const tourData = [
    {
      title: "Santorini Sunset Cruise",
      location: "Santorini, Greece",
      price: "$120",
      duration: "4 hours",
      highlights: "Caldera views, Wine tasting, Oia sunset",
      availability: "Available daily",
      guide: "Local Greek guide",
      transportation: "Boat",
    },
    {
      title: "Kyoto Temples & Tea Ceremony Tour",
      location: "Kyoto, Japan",
      price: "$80",
      duration: "3 hours",
      highlights: "Kinkaku-ji Temple, Gion district, Traditional tea ceremony",
      availability: "Available Tue–Sun",
      guide: "Cultural expert",
      transportation: "Walking",
    },
    {
      title: "Banff Lake Louise Adventure",
      location: "Banff National Park, Canada",
      price: "$95",
      duration: "5 hours",
      highlights: "Lake Louise, Moraine Lake, Mountain trails",
      availability: "Available May–October",
      guide: "Nature guide",
      transportation: "Van",
    },
    {
      title: "Marrakech Souk & Palace Tour",
      location: "Marrakech, Morocco",
      price: "$70",
      duration: "3 hours",
      highlights: "Medina markets, Bahia Palace, Moroccan crafts",
      availability: "Available daily",
      guide: "Local market guide",
      transportation: "Walking",
    },
    {
      title: "Paris Evening Cruise",
      location: "Paris, France",
      price: "$75",
      duration: "3 hours",
      highlights: "Seine River, Illuminated landmarks, Eiffel Tower views",
      availability: "Available daily",
      guide: "Local guide",
      transportation: "Boat",
    },
    {
      title: "Bali Temple & Beach Tour",
      location: "Bali, Indonesia",
      price: "$85",
      duration: "6 hours",
      highlights: "Tanah Lot Temple, Uluwatu cliffs, Kuta Beach",
      availability: "Available daily",
      guide: "Local Balinese guide",
      transportation: "Private car",
    },
  ];

  return (
    <div className="w-full  bg-white grid grid-rows-2 grid-cols-3 gap-4 px-20  pb-30">
      {tourData.map((tour, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`border p-10 rounded-lg shadow-md cursor-pointer transition 
            ${selected === index ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-[#FAFAFA]"}`}
        >
          <h3 className="text-xl font-bold mb-2">{tour.title}</h3>

        

          <p className="mb-1 flex items-center  gap-2">
            <span className="text-lg font-semibold text-[32px]">{tour.price}</span>
            <span className="mt-1 text-[#6B7280] text-[20px]">
              <sub>/ person</sub>
            </span>
          </p>
            <p className="mb-1 flex gap-2">
            <FiCheck className="text-xl w-20 text-[40px]" />
            Location: {tour.location}
          </p>

          <p className="mb-1 flex gap-2">
            <FiCheck className="text-xl w-20 text-[40px]" />
            Duration: {tour.duration}
          </p>

          <p className="mb-1 flex gap-4">
            <FiCheck className="text-xl w-20 text-[40px]" />
            Highlights: {tour.highlights}
          </p>

          <p className="mb-1 flex gap-2">
            <FiCheck className="text-xl w-20 text-[40px]" />
            Availability: {tour.availability}
          </p>

          <p className="mb-1 flex gap-2">
            <FiCheck className="text-xl w-20 text-[40px]" />
            {tour.guide}
          </p>

          <p className="mb-1 flex gap-2">
            <FiCheck className="text-xl w-20 text-[40px]" />
            <span>{tour.transportation}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
