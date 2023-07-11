import React from 'react'
import "./Home.css";
import "./Products.css";
import {useState} from 'react';
import { Button } from 'react-bootstrap';
import Books from './Books';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaRegBookmark } from "react-icons/fa";
import Edit from './Edit';

 
function Products () {

    let history= useNavigate();

    const handleEdit=(id,title, author,price) =>{
        localStorage.setItem('title', title);
        localStorage.setItem('author', author);
        localStorage.setItem('price', price);
        localStorage.setItem('id', id);
    }

    const handleDelete = (id) => {
        var index= Books.map(function(e) {
            return e.id;
        }).indexOf(id);
        
          Books.splice(index,1);
          history('/Products');
    };
    return(
        <div>
            <div className='card'>
                <h1>Products</h1>
            </div>
            <div className="productsList">
                {
                        Books.map((item) => { 
                            return(
                        <div>
                            <div className="productCard" style={{backgroundColor:"white"}} key={item.id}>
                                {/* <img src={props.image} alt='product-img' className="productImage"></img> */}
                               
                                <FaShoppingCart className="productCard__cart"/>
                                
                                <div className="productCard_content">
                                    <h2 className="productName">{item.title}</h2>
                                    <p>Written by {item.author}</p>
                                </div>
                                <p className=".productPrice">Price {item.price} RON</p>
                            
                            </div>
                            <div>
                                <button className="buton" onClick={() => handleDelete(item.id)}>DELETE</button>
                                <Link to={'/edit'}>
                                    <button className="buton" onClick={() => handleEdit(item.id, item.title, item.author, item.price)}>EDIT</button>
                                </Link>
                            </div>
                        </div>
            
                
            
                    )})
                }      
                        
            </div>
        </div>
    );
            }
export default Products;