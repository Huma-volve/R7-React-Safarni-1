import { Star, MapPin } from "lucide-react";


export const RecommendationSection = () => {
  const recommendations = [
    {
      title: "The Pyramids",
      image: "../../../public/home/HomeImg1.jpg",
      rating: 4.8,
      location: "Greece",
    },
    {
      title: "Bali Beach Resort",
      image: "../../../public/home/HomeImg2.jpg",
      rating: 4.6,
      location: "Indonesia",
    },
    {
      title: "Swiss Alps Escape",
      image: "../../../public/home/HomeImg3.jpg",
      rating: 4.9,
      location: "Switzerland",
    },
    {
      title: "Kyoto Cultural Tour",
      image: "../../../public/home/HomeImg4.jpg",
      rating: 4.7,
      location: "Japan",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl text-gray-900 dark:text-white">
            Recommendation
          </h2>
          <button className="text-[#1E429F] font-medium hover:underline">
            View All
          </button>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl"
            >
        
              <img
                src={item.image}
                alt={item.title}
                className="w-[90%] h-58 object-cover rounded-t-xl mx-auto mt-5"
              />

              <div className="p-4 space-y-2">
    
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

         
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {item.rating}
                  </span>
                </div>

       
                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
