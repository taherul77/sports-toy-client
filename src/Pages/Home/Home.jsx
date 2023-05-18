
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import Gallery from "../../Component/Gallery/Gallery";


const Home = () => {

 
  return (
    <div>
      <div className="">
        <Banner></Banner>
      </div>

      <div>
        <div>
          <h2 className="text-2xl font-semibold text-center  capitalize lg:text-3xl py-6 ">
            OUR RECIPE
          </h2>
        </div>
        <Gallery></Gallery>
      </div>
      <div>
      <h2 className="text-2xl font-semibold text-center  capitalize lg:text-3xl py-6 ">
            Browse Our Category
          </h2>
        <Category></Category>

      </div>
    </div>
  );
};

export default Home;
