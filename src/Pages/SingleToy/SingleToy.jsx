import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const SingleToy = () => {
  const data = useLoaderData();

  const {
    toy_img,
    toy_name,
    toy_price,
    toy_rating,
    toy_description,
    toy_category,
  } = data;

  console.log(toy_img);
  useTitle("Toy Details");
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center 0 capitalize lg:text-3xl ">
        Toy Details
      </h2>
      

      <section className="p-4 lg:p-8  ">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={toy_img}
              alt=""
              className="h-80  aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
             
              <h3 className="text-3xl font-bold">
              <b>Name : </b>
                  {toy_name}
              </h3>
              <p className="my-2 ">
              <b>Category : </b>
                  {toy_category}
              </p>
              <p className="my-2 ">
              <b>Price : </b>
                  {toy_price}
              </p>
              <p className="my-2 ">
              <b>Description : </b>
                  {toy_description}
              </p>
              <p className="my-2 ">
              <b>Rating : </b>
                  {toy_rating}
                </p>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default SingleToy;
