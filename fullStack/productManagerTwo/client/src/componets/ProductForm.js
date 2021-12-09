import React, { useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {beenSubmitted, setBeenSubmitted} = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    const onSubmit = (e) => {
        // Prevent the default behavior of the form
        e.preventDefault();
        // Create a new product
        const newProduct = {
            title,
            price,
            description
        }
        axios.post('http://localhost:8000/api', newProduct) 
        .then(res => {
            console.log(res)
            // Clear the form
            setTitle('');
            setPrice('');
            setDescription('');
            //rerendering the ProductList component
            setBeenSubmitted(!beenSubmitted);
        })
        .catch(err => console.log(err));
        
    }
    // Set the state of the form
    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Product Manager</h2>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/> 
            </p>
            </div>
            <div>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)}/> 
            </p>
            </div>
            <div>
            <p>
                <label>Description</label><br/>
                <input type="textarea" onChange = {(e)=>setDescription(e.target.value)}/> 
            </p>
            </div>
            <input type="submit" value="Create Product "/>
        </form> 
    )

}
// Export the component
export default ProductForm;