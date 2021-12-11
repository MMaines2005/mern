import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate}  from '@reach/router';

const UpdateProduct = (props) => {
    const {_id} = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            } )
            .catch(err => console.log(err));
    }, [_id])

    const onSubmit = (e) => {
        // Prevent the default behavior of the form
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/products/${_id}`,{
            title,
            price,
            description

        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate(`/`);

        })
        .catch(err => console.log(err));
    }
        
    
    return (
        <div>
           <form onSubmit={onSubmit}>
            <div>
                <h1>Update Product</h1>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}
                value={title}
                name= 'title'/> 
            </p>
            </div>
            <div>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)}
                value={price}
                name='price'/> 
            </p>
            </div>
            <div>
            <p>
                <label>Description</label><br/>
                <input type="textarea" onChange = {(e)=>setDescription(e.target.value)}
                value={description}
                name='description'/> 
            </p>
            </div>
            <input type="submit" value="Update Product "/>
        </form>
            
        </div>
    );
    }


    export default UpdateProduct;