
import * as React from "react";

import axios from 'axios';
import { useEffect, useState } from 'react';

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
import Signup from "./routes/Signin";
import "./index.css"
import Register from "./routes/Register";
import Products from "./routes/Products";
import Add from "./routes/Add";
import Edit from "./routes/Edit";

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

	return (
		<>
		<Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products />} />
          <Route path='/create' element={<Add />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
		</>
	);
};

export default App;