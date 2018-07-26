import React from 'react';
import './Product.css';

const Product = (props) => (
    <div className='Product'>
        <p>{props.name}: {props.cost} $</p>
        <button onClick={props.deleted} >Delete</button>    
        <button onClick={props.added} >+</button>    
        <button onClick={props.removed} >-</button>
        <p>count: {props.count}</p>    
    </div >
)
export default Product;
