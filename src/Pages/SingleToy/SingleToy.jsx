import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const SingleToy = () => {
  const data = useLoaderData();

  const { toy_img ,toy_name , toy_price , toy_rating , toy_description , toy_category} = data;

  console.log(toy_img);
  useTitle("Toy Details")
  return (

    <div>
      
      <h2 className="text-2xl font-semibold text-center 0 capitalize lg:text-3xl ">
            Toy Details
          </h2>
      <section className=" bg-slate-50">
        <div className="container flex flex-col-reverse mx-auto mt-5  lg:flex-row">
          <div className="flex flex-col  px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className=" leading-snug">
                  <b>Name : </b>
                  {toy_name}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="leading-snug">
                  <b>Category : </b>
                  {toy_category}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="leading-snug">
                  <b>Description : </b>
                  {toy_description}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="leading-snug">
                  <b>Price : </b>
                 {toy_price}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="leading-snug">
                  <b>Rating : </b>
                  {toy_rating}
                  

                </p>
              </div>
            </div>
           
          </div>
          <div className="lg:w-1/2 xl:w-3/5">
            <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
              <img src={toy_img} alt="" className="rounded-lg shadow-lg" />
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleToy;
