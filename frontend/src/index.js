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
import Signup from "./routes/Signup"

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
			

		]

		
	}
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


























// import { Nav, NavLink, NavMenu }
// 	from "./NavbarElements";

// const Navbar = () => {
// 	return (
// 		<>
// 			<Nav>
// 				<NavMenu>
// 					<NavLink to="/about" activeStyle>
// 						About
// 					</NavLink>
// 					<NavLink to="/contact" activeStyle>
// 						Contact Us
// 					</NavLink>
// 					<NavLink to="/blogs" activeStyle>
// 						Blogs
// 					</NavLink>
// 					<NavLink to="/sign-up" activeStyle>
// 						Sign Up
// 					</NavLink>
// 				</NavMenu>
// 			</Nav>
// 		</>
// 	);
// };

// export default Navbar;
