import React, {useEffect, useState} from 'react';
import axios from 'axios';

const OneProduct = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props._id)
            .then(res => setProduct({
                ...res.data
            }))
        }, [])
        return (
            <div>
                <h1>{product.title}</h1>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
            </div>
        )
}

export default OneProduct;