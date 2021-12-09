import React, { useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://loclhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res => console.log(res));
        
    }
    return (
        <form onSubmit={onSubmit}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/> 
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)}/> 
            </p>
            <p>
                <label>Description</label><br/>
                <input type="textarea" onChange = {(e)=>setDescription(e.target.value)}/> 
            </p>
            <input type="submit" value="Create Product "/>
        </form> 
    )

}

export default ProductForm;