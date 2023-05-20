const Banner = () => {
  return (
    <div className="mt-24">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full  text-slate-50 transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://i.ibb.co/3dn709p/photo-2023-05-20-23-39-57-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-green-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight uppercase text-gray-900 sm:text-4xl sm:leading-none">
            Sports 
            <br className="hidden ms-8 md:block" />
            Toy
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-fuchsia-900 focus:outline-none focus:ring focus:ring-fuchsia-300 focus:ring-opacity-50"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
      <div className="p-6 py-12  bg-slate-100">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center uppercase text-6xl tracking-tighter font-bold">
              Up to 
              <br className="sm:hidden" />
               <span className="text-cyan-600 ms-2">20% </span>Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold uppercase text-lg">Sport</span>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
