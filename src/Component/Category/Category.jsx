import { useEffect, useState } from "react";

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
            <div className="mt-5 grid grid-cols-12 gap-10">
                {categoryWiseToy.map((toy, index) => (
                    <div
                        key={index}
                        className="col-span-6 lg:col-span-4 rounded-md shadow-md bg-gray-100 text-gray-900 border"
                    >
                        <img
                            src={toy.toy_img}
                            alt=""
                            className="w-full h-auto rounded-t-md bg-gray-500"
                        />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold tracking-wide">
                                    {toy.toy_name}
                                </h2>
                                <p className="text-gray-900">
                                    Price: {toy.toy_price}
                                </p>
                                <p className="text-gray-900">
                                    Rating: {toy.toy_rating}
                                </p>
                            </div>
                            <button
                                type="button"
                                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
                            >
                                View Toy Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
