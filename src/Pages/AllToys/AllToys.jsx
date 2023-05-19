import useTitle from "../../Hooks/useTitle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";

const AllToys = () => {
  useTitle("All Toys");

  // Search
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredToys, setFilteredToys] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      performSearch();
    }
  };

  const performSearch = () => {
    const filteredToys = toys.filter((toy) =>
      toy.toy_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredToys(filteredToys);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fetch toys
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data); // Initialize filtered toys with all toys
      });
  }, []);

  return (
    <div>
      <div className="mt-40 py-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full py-2 pl-10 pr-4 bg-gray-300 border  text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
        />
      </div>

      <div className="overflow-x-auto w-full  bg-gray-300">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-gray-500 h-10">
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" ">
            {filteredToys.map((toy, index) => (
              <tr className="" key={index}>
                <td>
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="max-w-[150px]">
                        <img src={toy.toy_img} alt="t" />
                      </div>
                    </div>
                    <div className="m-6">
                      <div className="">Name</div>
                      <div className="">Email</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="">{toy.toy_name}</span>
                </td>
                <td>{toy.toy_category}</td>
                <td>{toy.toy_quantity}</td>
                <td>
                  <div className="flex items-center gap-5">
                    <button className="">
                      <VisibilityIcon color="secondary"></VisibilityIcon>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
