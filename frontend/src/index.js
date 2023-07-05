import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./routes/Home";
import About from "./routes/About";
import Signup from "./routes/Signup";
import "./index.css"
import Register from "./routes/Register";
import Products from "./routes/Products";

const AppLayout = () => {
	return (
		<>
		<Navbar />
		<Outlet />
		</>
	);
};


const router = createBrowserRouter([
	{
		element: <AppLayout/>,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "about",
				element: <About />
			},
			{
				path: "signup",
				element: <Signup />
			  },
			  {
				path: "register",
				element: <Register />
			  },
			  {
				path: "products",
				element: <Products />
			  },
			
			

		]

		
	}
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

