
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import FooterBanner from "../../Component/FooterBanner/FooterBanner";
import Gallery from "../../Component/Gallery/Gallery";
import SubGallery from "../../Component/SubGallery/SubGallery";


const Home = () => {

  return (
    <div>
      <div className="mb-6">
        <Banner></Banner>
      </div>

      <SubGallery></SubGallery>

      <div>
        <div>
          <h2 className="text-2xl font-semibold text-center  capitalize lg:text-3xl py-6 ">
            OUR TOY Gallery
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
      <FooterBanner></FooterBanner>
    </div>
  );
};

export default Home;
