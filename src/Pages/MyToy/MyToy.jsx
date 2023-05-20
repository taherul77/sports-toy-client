import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-toy?seller_email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  });

  return (
    <div>
      <h2>mytoy={myToy.length}</h2>
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
           {
            myToy.map((toy,index) => (
                <tr key={index} className="">
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
                  <span className="">name</span>
                </td>
                <td>category</td>
                <td>quantity</td>
                <td>
                  <div className="flex items-center gap-5">
                    <button className="">
                      <VisibilityIcon color="secondary"></VisibilityIcon>
                    </button>
                  </div>
                </td>
              </tr>

            ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
