import React from 'react';
import './Order.css';

const Order = (props) => (
    <div className='Order'>
        <p>{props.name}: {props.count}</p>
    </div>
)

export default Order;