
import "react-tabs/style/react-tabs.css";

import { useEffect, useState } from "react";
import CategoryContent from "./CategoryContent";

const Category = () => {

  const [Toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);


  return (
    <div>

      {
        Toys.map(toy=> <CategoryContent
        key={toy._id}
        toy={toy}
        >

        </CategoryContent>
          
          
          )

      }
      
    </div>
  );
};

export default Category;
