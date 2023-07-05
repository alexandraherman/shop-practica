import React from 'react'
import "./Home.css";
import "./Products.css";
import Cards from "./Cards";
import {useState} from 'react';


const Products = () => {

    const [books, setBooks]= useState([
        {title:'Odysseia', body:'lorem ipsum...', author: 'Homer', price: 75 , id:1},
        {title:'lalala', body:'lorem ipsum...', price:35, author: 'ann', id:2},
    ])


    return (
        <div>
            <div className='card'>
                <h1>Products</h1>
            </div>
            <div>
             <Cards books={books}/>
            </div>
        </div>
		
 	);
 };

export default Products;