/* eslint-disable react/prop-types */
import { useState } from "react";
import useTitle from "../../Hooks/useTitle";


const Blog = () => {

    const Item = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);
        useTitle("Blog");
        return (
          <div className="border rounded shadow-md">
            <button
              type="button"
              aria-label="Open item"
              title="Open item"
              className="flex items-center justify-between w-full p-4 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className="text-lg text-left  font-medium">{title}</p>
              <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  className={`w-3  font-black transition-transform duration-200 ${
                    isOpen ? "transform rotate-180 text-primary" : ""
                  }`}
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="2,7 12,17 22,7"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            {isOpen && (
              <div className="p-4 pt-0">
                <p className=" opacity-80">{children}</p>
              </div>
            )}
          </div>
        );
      }



    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="space-y-4 text-justify">
        <Item title="What is an access token and refresh token? How do they work and where should we store them on the client-side?">
            JWT Means (JSON Web Token)? JSON Web Token (JWT) is an open standard
            (RFC 7519) for securely transmitting information between parties as
            JSON object.It is compact, readable and digitally signed using a
            private key/ or a public key pair by the Identity Provider(IdP). So
            the integrity and authenticity of the token can be verified by other
            parties involved.The purpose of using JWT is not to hide data but to
            ensure the authenticity of the data. JWT is signed and encoded, not
            encrypted.
          </Item>
          <Item title="Compare SQL and NoSQL databases?">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.Remember that
            SQL dialects share many properties though they interface with
            distinct databases. Flavors of NoSQL vary far more across their
            attendant systems, so comparison can be more useful between multiple
            non-relational technologies vs. SQL generally.
          </Item>
          
          <Item title="What is express js? What is Nest JS?">
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful.Node.js can now operate non-blocking software tasks out of
            any JavaScript programming. It contains no OS-specific constants.
            Node.js establishes a strong relationship with the system files,
            allowing companies to read and write to the hard drive.
          </Item>
          <Item title="What is MongoDB aggregate and how does it work?">
            The entire NodeJS architecture is not single-threaded. NodeJS
            receives multiple client requests and places them into EventQueue.
            NodeJS is built with the concept of event-driven architecture.
            NodeJS has its own EventLoop which is an infinite loop that receives
            requests and processes them. EventLoop is the listener for the
            EventQueue. If NodeJS can process the request without I/O blocking
            then the event loop would itself process the request and sends the
            response back to the client by itself. But, it is possible to
            process multiple requests parallelly using the NodeJS cluster module
            or worker_threads module.
          </Item>
        </div>
      </div>
    </div>
    );
};

export default Blog;