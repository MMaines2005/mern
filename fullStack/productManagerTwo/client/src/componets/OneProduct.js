import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
    return (
        <div>
            <h1>{productData.title}</h1>
            <div><p>{productData.description}</p></div>
            <div><p>{productData.price}</p></div>
            
        </div>
    );
    }

    export default OneProduct;