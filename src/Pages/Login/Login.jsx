/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
    useTitle("Login");
    const { signIn,logInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const googleProvider = new GoogleAuthProvider();
 

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    
        signIn(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError("");
            navigate(form, { replace: true });
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });
      };
      const handleGoogleSignIn = () => {
        logInWithGoogle(googleProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError("");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });

      };
      

  return (
    <div className="flex justify-center">
      <div className="w-full  mt-20 max-w-md p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
        onSubmit={handleSignIn}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block ">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md"
            />
            <div className="flex justify-end text-xs ">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <small>
            <p className="text-error -mt-2">{error.split("Firebase:")}</p>
          </small>
          <button className="block w-full p-3 text-center rounded-sm">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <Stack direction="row" spacing={1}>
            <IconButton onClick={handleGoogleSignIn} aria-label="Log in with Google" color="secondary">
              <GoogleIcon></GoogleIcon>
            </IconButton>
          </Stack>
        </div>
        <p className="text-xs text-center sm:px-6 ">
          Don't have an account?
          <Link
                    rel="noopener noreferrer"
                    to="/register"
                    className="underline hover:text-primary"
                  >
                    Register Now
                  </Link>
          
        </p>
      </div>
    </div>
  );
};

export default Login;
