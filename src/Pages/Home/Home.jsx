
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import FooterBanner from "../../Component/FooterBanner/FooterBanner";
import Gallery from "../../Component/Gallery/Gallery";
import SubGallery from "../../Component/SubGallery/SubGallery";
import Contact from "../../Contact/Contact";


const Home = () => {

  return (
    <div className="mb-6">
      <div className="mb-6">
        <Banner></Banner>
      </div>

      <div className="py-6">
      <SubGallery></SubGallery>
      </div>

      <div>
        <div>
          <h2 className="text-2xl font-semibold text-center capitalize lg:text-3xl py-6 ">
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
      <div className="py-6">
      <Contact></Contact>
      </div>
     
      <FooterBanner></FooterBanner>
    </div>
  );
};

export default Home;
