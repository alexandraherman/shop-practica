
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Signup from "./routes/Signup";
import "./index.css"
import Register from "./routes/Register";
import Products from "./routes/Products";

const App = () => {
	return (
		<>
		<Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products />} />
        </Routes>
		</>
	);
};

export default App;