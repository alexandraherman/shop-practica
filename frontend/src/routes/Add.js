import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap'; 
import { useState } from 'react';
import { FaShoppingCart, FaRegBookmark } from "react-icons/fa";
import { useNavigate} from 'react-router-dom';
import '../routes/Add.css';
import Books from './Books';
function Add(){

    const[title, setTitle]=useState("");
    const[author, setAuthor]=useState("");
    const[price, setPrice]=useState("");

    let history= useNavigate();
 
    const handleSubmit=(e) =>{
        e.preventDefault();

        const uniqueId = uuidv4().slice(0, 8);
        

        let a= title,
        b= author,
        c=price;
        Books.push({id: uniqueId, title: a, author: b, price: c});
        //aici trebe sa modific
        
        history("/Products");

        const product = {
            id:'2',
            title:'aa',
            author:'bb',
            price:'7'
        }


    }
 
    return(
        <div>
            <Form className='form-container'>
                <Form.Group controlId='forTitle' className='form-group"'>
                    <Form.Control type='text' className='form-input' placeholder='Enter Title'  required onChange={(e) => setTitle(e.target.value)} >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='forAuthor' className='form-group"'>
                    <Form.Control type='text' className='form-input' placeholder='Enter Author' required onChange={(e) => setAuthor(e.target.value)} >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='forPrice' className='form-group"'>
                    <Form.Control type='text' className='form-input' placeholder='Enter Price' required onChange={(e) => setPrice(e.target.value)} >
                    </Form.Control>
                </Form.Group>
                <button className='submit-button' onClick={(e)=> handleSubmit(e)} type='submit' >Submit </button>
            </Form>
        </div>
    )

}
export default Add;