import { Link } from '@reach/router';
import React, {useState, useEffect}from 'react';
import axios from 'axios';


const ProductList = (props) => {
    const {beenSubmitted} = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((response) =>{
            console.log(response.data);
            setProducts(response.data);
        })
        .catch(err => console.log(err));
    }, [beenSubmitted]);
    return (
        <div>
            <h3>All Products</h3>
            {products.map((product, index) => {
                return <div key={index}>
                    <Link to={`${product._id}`}>{product.title}</Link>
                </div>
            })}
        </div>
    )
}

export default ProductList;