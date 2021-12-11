import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const OneProduct = (props) => {
    const {_id} = props._id;
    const [productData, setProductData] = useState({});
    useEffect(() => {
        axios.get(`/api/products/${_id}`)
            .then(res => {
                setProductData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${_id}`)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <h1>{productData.title}</h1>
            <div><p>{productData.description}</p></div>
            <div><p>{productData.price}</p></div>
            <button onClick={deleteProduct}>Delete</button>
            
        </div>
    );
    }

    export default OneProduct;