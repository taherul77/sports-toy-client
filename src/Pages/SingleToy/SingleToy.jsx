import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const data = useLoaderData();

  const { toy_img ,toy_name , toy_price , toy_rating , toy_description , toy_category} = data;

  console.log(toy_img);
  return (
    <div>
      <section className="bg-gray-500">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
            {toy_name}
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            
          
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                 Category : {toy_category}
                </h1>
              </div>

              <div className="space-y-3">
                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Price : {toy_price}
                </h1>
              </div>

              <div className="space-y-3">
                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Rating : {toy_rating}
                </h1>
              </div>
              <div className="space-y-3">
                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Description : {toy_description}
                </h1>
              </div>
            </div>
           

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src={toy_img}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleToy;
