

export default function HeroSection() {
  return (
    <section className="xl:w-[85%] w-full mx-auto bg-white dark:bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-1 sm:px-1 lg:px-5 flex flex-col lg:flex-row items-center justify-between xl:gap-30 lg:gap-10">
        

        <div className="flex justify-start relative">
          <div className="space-y-6 max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Visit The Most{" "}
              <span className="text-[#1E429F]">Beautiful Places</span>{" "}
              In The World
            </h1>

            <p className="text-gray-600 dark:text-gray-300">
              "Explore stunning destinations around the globe. Find travel inspiration, top attractions, 
              and plan your next adventure—all from one platform."
            </p>
            <img src="../../../public/home/Clip.png" alt=""className="w-15 h-15 absolute left-95 top-30 hidden xl:block"/>
          </div>
       
        </div>


        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-5 w-auto">
        
        <div><img src="../../../public/home/HomeImg1.jpg" alt="" className="rounded-tl-3xl"/></div>

            <div
            className="col-start-1 row-start-2">
            <img src="../../../public/home/HomeImg2.jpg" alt="" className="rounded-3xl h-full" />
          </div>

          <div
            className="col-start-2 row-start-1 xl:relative xl:top-35">
            <img src="../../../public/home/HomeImg3.jpg" alt="" className="rounded-tr-3xl rounded-br-3xl rounded-bl-3xl " />
          </div>

          <div
            className="col-start-2 row-start-2  flex flex-col justify-end">
            <img src="../../../public/home/HomeImg4.jpg" className="rounded-3xl xl:h-[50%] xl:w-full" alt="" /></div>


            <div
            className="col-start-3 row-start-2 xl:w-[70%] ">
            <img src="../../../public/home/HomeImg5.jpg" alt="" className="rounded-tr-3xl rounded-br-3xl h-full" /></div>
        
        </div>
        </div>
    </section>
  );
}
