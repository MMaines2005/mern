import { Link, navigate } from '@reach/router';
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

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res);
            setProducts(products.filter(product => product._id !== id));
        }
        )
        .catch(err => console.log(err));
    }


    return (
        <div>
            <h3>All Products</h3>
            {products.map((product, index) => {
                return <div key={index}>
                    <Link to={`${product._id}`}>{product.title}</Link>
                    <button onClick={()=>navigate(`/update/${product._id}`)}>Edit</button>
                    <button onClick={()=>deleteProduct(product._id)}>Delete</button>
                </div>
            })}
        </div>
    )
}

export default ProductList;