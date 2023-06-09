import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleToy from "../Pages/SingleToy/SingleToy";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToy from "../Pages/MyToy/MyToy";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "all_toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "add_toy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "my_toy",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: "single_toy/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-marketplace-server-green.vercel.app/single-toys/${params.id}`),
      },
      {
        path: "my_toy/update_toy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://toy-marketplace-server-green.vercel.app/my-toy/update-toy/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
