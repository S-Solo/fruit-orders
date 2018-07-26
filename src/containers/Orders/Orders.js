import React from 'react';
import Order from '../../components/Order/Order';
import './Orders.css';

import { connect } from 'react-redux';

class Orders extends React.Component {
    render() {
        const fruits = this.props.fruits.map(fruit => {
            return <Order
                key={fruit.key}
                name={fruit.name}
                count={fruit.count} />
        });

        return (
            <div className='Orders'>
                <div className='Card'>
                <p>- Your Order -</p>
                    {fruits}
                </div>
                <p>total price: {this.props.totalPrice} $</p>
                <button onClick={() => alert('Your order has been placed.')}
                        style={{marginBottom: '20px', padding: '4px', borderRadius: '15px', width: '130px', cursor: 'pointer'}}
                        >Place an order!</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fruits: state.fruits,
        totalPrice: state.totalPrice
    }
}

const dispatchAction = dispatch => {
    return {

    }
}


export default connect(mapStateToProps, dispatchAction)(Orders);