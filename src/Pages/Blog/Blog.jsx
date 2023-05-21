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
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="space-y-4 text-justify">
          <Item title="What is an access token and refresh token? How do they work and where should we store them on the client-side?">
            Refresh tokens allow you to balance your users access needs with
            your organizations security practices. Access tokens help users get
            the resources they need to complete their tasks, but such tokens can
            also expose your organization to data compromise or other malicious
            actions if a hacker is able to steal them.
            <br />
            Refresh Tokens are issued to the client by the authorization server
            upon request of an Access Token. Refresh Token are typically longer
            lived than Access Tokens and used to request a new Access Token
            without forcing user authentication.Access tokens are used in
            token-based authentication to allow an application to access an API.
            The application receives an access token after a user successfully
            authenticates and authorizes access, then passes the access token as
            a credential when it calls the target API. We can store the access
            token and refresh token in the server-side session. The application
            can use web sessions to communicate with the server. The token is
            then available for any requests originating from server-side code.
          </Item>
          <Item title="Compare SQL and NoSQL databases?">
            
The five critical differences between SQL and NoSQL are:

SQL databases are relational, and NoSQL databases are non-relational.
SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
          </Item>

          <Item title="What is express js? What is Nest JS?">
          Both NestJS and Express. js are frameworks, specifically for building backend web applications. A framework is an opinionated set of tools that serves as a basis or a starting point for creating something. In formal terms: a software framework is an abstraction that provides generic functionality.It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.
          </Item>
          <Item title="What is MongoDB aggregate and how does it work?">
          MongoDBs aggregate function is a powerful tool used for data aggregation and analysis within the MongoDB database. It allows you to perform advanced queries and transformations on your data, similar to the GROUP BY and JOIN operations in SQL databases.
          Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.We can use aggregation operations to: Group values from multiple documents together. Perform operations on the grouped data to return a single result. Analyze data changes over time.Extracts data that provides insights. Data collected and data analyzed are two very different processes. ...
Enables statistical analysis. ...
Improves marketing. ...
Improves sales.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Blog;
