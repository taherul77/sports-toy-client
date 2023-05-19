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


    const handleAddToy = event =>{
        const form = event.target;
        const name = user?.name;
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
      <section className="bg-white ">
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
                  type="text"
                  name="name"
                  className="block w-full py-3  bg-white border rounded-lg px-11"
                  placeholder="Username"
                />
              </div>

              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <EmailIcon></EmailIcon>
                </span>

                <input
                  type="email"
                  name="email"
                  className="block w-full py-3  bg-white border rounded-lg px-11"
                  placeholder="Email address"
                />
              </div>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  
                </span>

                <input
                  type="text"
                  name="toyName"
                  className="block w-full py-3  bg-white border rounded-lg px-11"
                  placeholder="Toy Name"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <CategoryIcon></CategoryIcon>
                </span>

                <input
                  type="text"
                  name="category"
                  className="block w-full px-10 py-3  bg-white border rounded-lg"
                  placeholder="Category"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>
                </span>

                <input
                  type="text"
                  name="quantity"
                  className="block w-full px-10 py-3  bg-white border rounded-lg"
                  placeholder="Available quantity"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <StarBorderIcon></StarBorderIcon>
                </span>

                <input
                  type="text"
                  name="price"
                  className="block w-full px-10 py-3  bg-white border rounded-lg"
                  placeholder="Price"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <StarBorderIcon></StarBorderIcon>
                </span>

                <input
                  type="text"
                  name="rating"
                  className="block w-full px-10 py-3  bg-white border rounded-lg"
                  placeholder="Rating"
                />
              </div>
              <div className="relative flex items-center mt-4">
              <span className="absolute">
              <PhotoIcon></PhotoIcon>
                </span>
                <input
                  type="photo"
                  name="photo"
                  id="photo"
                  placeholder="Photo Link"
                  className="block w-full px-10 py-3  bg-white border rounded-lg"
                />
              </div>
             
            </div>
            <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <DetailsIcon></DetailsIcon>
                </span>
                <textarea className="block w-full px-10 py-3  bg-white border rounded-lg"  name="description" id="" placeholder="Description" ></textarea>

                
              </div>

            <div className="mt-6">
                <input className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" type="submit" value="Add Toy" />
             
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddToy;
