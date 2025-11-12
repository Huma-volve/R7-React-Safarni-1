

export const Category = () => {

  const category=[{title:"Flight", image:"/Home/Flight.jpg", url:"#"}, {title:"Cars", image:"/Home/Car.jpg", url:"#"}, {title:"Tours", image: "/Home/hotel.jpg", url:"#"}, {title:"Hotel", image:"/Home/Tour.jpg", url:"#"}]

  return (
    
    <section className="py-16 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200 p-3 rounded-3xl">
      <h1 className="text-2xl  text-gray-900 dark:text-white mb-1 text">
        Categories
      </h1>

      <div className="flex flex-wrap justify-center  gap-10">
        {category.map((category) => (
          <div
            key={category.title}
            className="flex flex-col items-center space-y-3 hover:cursor-pointer"
          >
            <a href={category.url}>
            <img
              src={category.image}
              alt={category.title}
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-md hover:scale-105 transition-transform duration-300"
            />   </a>

            <a href={category.url}>
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {category.title}
            </h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
