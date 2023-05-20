import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';


const Category = () => {
  const [activeCategories, setActiveCategories] = useState("Football");
  const [categories, setCategories] = useState([]);
  const [categoryWiseToy, setCategoryWiseToy] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategory = (category) => {
    fetch(`http://localhost:5000/toys/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryWiseToy(data));
  };

  useEffect(() => {
    if (!pageLoaded) {
      handleCategory("Football");
      setPageLoaded(true);
    }
  }, [pageLoaded]);

  return (
    <div>
      <div className="flex justify-center gap-8">
        {categories.map((category, index) => (
          <p
            onClick={() => {
              handleCategory(category.toy_category),
                setActiveCategories(category.toy_category);
            }}
            className={`text-lg font-medium hover:underline cursor-pointer`}
            key={index}
          >
            {category.toy_category}
          </p>
        ))}
      </div>
      <h2 className="text-xl font-semibold tracking-wide">
        {activeCategories}
      </h2>
      <div className="mt-5 grid grid-cols-12  lg:gap-10">
        {categoryWiseToy.map((toy, index) => (
          <div
            key={index}
            className="col-span-12 lg:col-span-4 rounded-md shadow-md  text-gray-900 border"
          >
           
              <img
              src={toy.toy_img}
              alt=""
              className="object-cover object-center w-full rounded-md h-auto"
            />

            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide">
                  {toy.toy_name}
                </h2>
                <p className="text-gray-900">Price: {toy.toy_price}</p>
                <div className="flex items-center gap-2">
                  <p className="text-gray-900">Rating: {toy.toy_rating}</p>
                  <StarBorderIcon color="warning"></StarBorderIcon>
                </div>
              </div>

              <Link to={`/single_toy/${toy._id}`}>
                
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-fuchsia-900 focus:outline-none focus:ring focus:ring-fuchsia-300 focus:ring-opacity-50"
                >
                  View Toy Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
