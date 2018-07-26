import React from 'react';
import './Product.css';

const Product = (props) => (
    <div className='Product'>
        <p>{props.name}: {props.cost} $</p>
        <button onClick={props.deleted} className='deleteButton'>Delete</button>    
        <button onClick={props.added} className='Button'>+</button>    
        <button onClick={props.removed} className='Button'>-</button>
        <p>count: {props.count}</p>    
    </div >
)
export default Product;