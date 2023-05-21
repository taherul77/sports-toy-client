import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  

  const signOut = () => {
    logOut()
      .then(() => {
        refreshPage();
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const refreshPage = () => {
    window.location.reload();
  };

  const [isOpen, setIsOpen] = useState(false);
  const menus = [
    { name: "Home", link: "/" },
    { name: "All Toys", link: "/all_toys" },
    { name: "Blogs", link: "/blog" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 z-10">
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link to={"/"}>
          <img
            className="w-32 h-auto"
            src="https://i.ibb.co/LPvfCjz/SPORTS-TOY-SHOP-2-removebg.png"
            alt=""
          />
        </Link>
        <div className="flex items-center">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {isOpen ? (
              <CgClose className="text-primary" />
            ) : (
              <VscThreeBars className="text-primary" />
            )}
          </div>
        </div>

        <ul
          className={`w-full text-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0  md:w-auto transition-all duration-500 ease-in ${
            isOpen ? "top-20 " : "top-[-490px]"
          } ${
            isOpen && "h-screen flex items-center justify-center mt-[-5rem]"
          }`}
        >
          <div className="md:flex md:items-center uppercase space-y-7 md:space-y-0 md:space-x-5">
            {menus.map((menu) => (
              <li key={menu.name} className="text-xl md:my-0 my-7">
                <NavLink
                  to={menu.link}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? " border-md rounded-md font-medium underline text-xl text-blue-900"
                      : "font-medium tracking-wide text-gray-950 transition-colors text-xl "
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
            {user?.uid ? (
              <>
                <li>
                  <NavLink
                    aria-label="Add Toy"
                    title="Add Toy"
                    className={({ isActive }) =>
                      isActive
                        ? " border-md rounded-md font-medium underline text-xl text-blue-900"
                        : "font-medium tracking-wide text-gray-950 transition-colors text-xl "
                    }
                    to="/my_toy"
                  >
                    My Toy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    aria-label="Add Toy"
                    title="Add Toy"
                    className={({ isActive }) =>
                      isActive
                        ? " border-md rounded-md font-medium underline text-xl text-blue-900"
                        : "font-medium tracking-wide text-gray-950 transition-colors text-xl "
                    }
                    to="/add_toy"
                  >
                    Add Toy
                  </NavLink>
                </li>
                <div className="dropdown dropdown-hover dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle border-2 border-primary avatar ml-2"
                  >
                    <div className="w-10 rounded-full">
                      {user?.photoURL ? (
                        <img alt="" src={user.photoURL} />
                      ) : (
                        <img
                          alt=""
                          src="https://i.ibb.co/VvZScTP/blank-avatar.png"
                        />
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content p-2 shadow bg-base-100 border rounded-md w-52"
                  >
                    <li>
                      <Link>{user?.displayName}</Link>
                    </li>
                    <li>
                      <Link>Profile</Link>
                    </li>
                    <li>
                      <Link onClick={signOut}>Logout</Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
              <ul className="col-span-3 justify-end items-center hidden space-x-8 lg:flex">
              <li>
                  <Link
                      to="/login"
                      className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md   bg-fuchsia-900  hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      aria-label="login"
                      title="login"
                  >
                      login
                  </Link>
              </li>
          </ul>
              
              
              
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
