import React, { useState } from 'react';
import ProductForm from '../componets/ProductForm';
import ProductList from '../componets/ProductList';



// Main component that is passed to App.js for rendering
const Main = () => {
    const [beenSubmitted, setBeenSubmitted] = useState(false);
    return (
/* ProductForm that is passed through Main.js to App.js  */
    <div>
        <ProductForm setBeenSubmitted = {setBeenSubmitted}  
        beenSubmitted = {beenSubmitted}/>
        <hr/>
        <ProductList beenSubmitted = {beenSubmitted} />
    </div>
    )
}
export default Main;