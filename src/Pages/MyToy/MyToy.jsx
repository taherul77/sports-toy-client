import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


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

  const handleDelete = id =>{

    const proceed = confirm('Are you sure you want to delete');
    if(proceed){

fetch(`http://localhost:5000/my-toy/${id}`),{
    method: 'DELETE'
}
.then(res =>res.json())
.then(data =>{
    console.log(data);
    
})

    }





  }

  return (
    <div>
     
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
                      <div className="">{toy.seller_name}</div>
                      <div className="">{toy.seller_email}</div>
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
                      <EditIcon color="secondary"></EditIcon>
                    </button>
                  <button onClick={() => handleDelete(toy._id)} className="">
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

            ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
