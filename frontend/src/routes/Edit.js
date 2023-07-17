import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap'; 
import { useState, useEffect } from 'react';
import { FaShoppingCart, FaRegBookmark } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom';
import Products from "../routes/Products";
import Books from './Books';

function Edit(){
    const[title, setTitle]=useState("");
    const[author, setAuthor]=useState("");
    const[price, setPrice]=useState("");
    const[id, setId]=useState("");

    let history= useNavigate();

    var index= Books.map(function(e) {
        return e.id;
    }).indexOf(id);

    const handleEdit=(e) =>{
        e.preventDefault();

       let a= Books[index];
       a.title=title;
       a.author=author;
       a.price=price;
        
       history("/Products");
    }

    useEffect(()=> {
        setTitle(localStorage.getItem('title'))
        setAuthor(localStorage.getItem('author'))
        setPrice(localStorage.getItem('price'))
        setId(localStorage.getItem('id'))
    }, []
    
    )

    return(
        <div>
            <Form className='form-container'>
                <Form.Group controlId='forTitle' className='form-group"'>
                    <Form.Control type='text' className='form-input' placeholder='Enter Title' value={title} required onChange={(e) => setTitle(e.target.value)} >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='forAuthor' className='form-group"'>
                    <Form.Control type='text' className='form-input' placeholder='Enter Author' value={author} required onChange={(e) => setAuthor(e.target.value)} >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='forPrice' className='form-group"'>
                    <Form.Control type='text' className='form-input' placeholder='Enter Price' value={price} required onChange={(e) => setPrice(e.target.value)} >
                    </Form.Control>
                </Form.Group>
                <button className='submit-button' onClick={(e)=> handleEdit(e)} type='submit' >Update </button>
            </Form>
        </div>
    )

} 
export default Edit;