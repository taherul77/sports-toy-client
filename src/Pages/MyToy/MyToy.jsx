import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-toy?seller_email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  });

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/delete-toy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            alert("deleted success");
            const remaining = myToy.filter((toy) => toy._id !== id);
            console.log(myToy);
            setMyToy(remaining);
          }
        });
        
    }
  };

  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left "
                      >
                        <div className="flex items-center uppercase gap-x-3 ms-20 ">
                          <span>Seller name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm uppercase font-normal text-left  "
                      >
                        Toy Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal uppercase text-left  "
                      >
                        Sub-category
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm uppercase font-normal text-left  "
                      >
                        Available Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm uppercase font-normal text-left  "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" divide-y divide-gray-200 dark:divide-gray-700">
                    {myToy.map((toy, index) => (
                      <tr key={index}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-20 rounded-2xl "
                                src={toy.toy_img}
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium ">
                                  {toy.seller_name}
                                </h2>
                                <p className="text-sm font-normal">
                                  {toy.seller_email}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                          {toy.toy_name}
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                          {toy.toy_category}
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                          {toy.toy_quantity}
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                          <Link to={`update_toy/${toy._id}`}>
                          <button className="">
                              <EditIcon color="secondary"></EditIcon>
                            </button>
                          </Link>
                            <button
                              onClick={() => handleDelete(toy._id)}
                              className=""
                            >
                              <DeleteIcon color="secondary"></DeleteIcon>
                            </button>
                            <Link to={`/single_toy/${toy._id}`}>
                              <button className="">
                                <VisibilityIcon color="secondary"></VisibilityIcon>
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyToy;
