import EmailIcon from "@mui/icons-material/Email";
import PhotoIcon from "@mui/icons-material/Photo";
import PersonIcon from "@mui/icons-material/Person";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CategoryIcon from "@mui/icons-material/Category";
import DetailsIcon from "@mui/icons-material/Details";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";




const AddToy = () => {
    useTitle("All Toys");

const {user} = useContext(AuthContext)

console.log(user);


    const handleAddToy = event =>{
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const toyName = form.toyName.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const description = form.description.value;




        const toyAdd = {
            seller_name: name,
            seller_email: email,
            toy_name: toyName,
            toy_img: photo,
            toy_category: category,
            toy_price: price,
            toy_rating: rating,
            toy_quantity: quantity,
            toy_description: description,
          };
    
          fetch("http://localhost:5000/add-toy", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(toyAdd),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              toast.success("Toy Added Successfully");
              form.reset()
            }
          });

    };

   
  




  return (
    <div>
      <section className="">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleAddToy} className="w-full max-w-md">
            <div className="flex items-center justify-center mt-6">
              <h1 className="w-1/3 pb-4 font-medium text-center  capitalize border-b-2 border-blue-500  ">
                Add Toy
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-5 items-center">
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <PersonIcon></PersonIcon>
                </span>

                <input
                readOnly
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  className="block w-full py-3  bg-white border rounded-lg px-11"
                  placeholder="Username"
                />
              </div>

              <div className="relative flex items-center mt-6">
                <span className="absolute m-2">
                  <EmailIcon></EmailIcon>
                </span>

                <input
                readOnly
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  className="block w-full py-3  bg-white border rounded-lg px-11"
                  placeholder="Email address"
                />
              </div>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  
                </span>

                <input
                required
                  type="text"
                  name="toyName"
                  className="block w-full py-3  bg-white border rounded-lg px-11"
                  placeholder="Toy Name"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute m-2">
                  <CategoryIcon></CategoryIcon>
                </span>

                <input
                required
                  type="text"
                  name="category"
                  className="block w-full px-10 py-3  bg-white border rounded-lg"
                  placeholder="Category"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute m-2">
                  <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>
                </span>

                <input
                required
                  type="text"
                  name="quantity"
                  className="block w-full px-10 py-3  bg-white border rounded-lg"
                  placeholder="Available quantity"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute m-2">
                  TK
                </span>

                <input
                required
                  type="text"
                  name="price"
                  className="block w-full px-10 py-3  bg-white border rounded-lg"
                  placeholder="Price"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute m-2">
                  <StarBorderIcon></StarBorderIcon>
                </span>

                <input
                required
                  type="text"
                  name="rating"
                  className="block w-full px-10 py-3  bg-white border rounded-lg"
                  placeholder="Rating"
                />
              </div>
              <div className="relative flex items-center mt-4">
              <span className="absolute m-2">
              <PhotoIcon></PhotoIcon>
                </span>
                <input
                required
                  type="photo"
                  name="photo"
                  id="photo"
                  placeholder="Photo Link"
                  className="block w-full px-10 py-3  bg-white border rounded-lg"
                />
              </div>
             
            </div>
            <div className="relative flex items-center mt-4">
                <span className="absolute m-2">
                  <DetailsIcon></DetailsIcon>
                </span>
                <textarea className="block w-full px-10 py-3  bg-white border rounded-lg"  name="description" required id="" placeholder="Description" ></textarea>

                
              </div>

            <div className="mt-6">
                <input className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-fuchsia-900 focus:outline-none focus:ring focus:ring-fuchsia-300 focus:ring-opacity-50" type="submit"  value="Add Toy" />
             
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddToy;
