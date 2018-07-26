import React from 'react';
import './Products.css';

import Product from '../../components/Product/Product';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Products extends React.Component {
    render() {
        const fruits = this.props.fruits.map(fruit => {
            return <Product
                key={fruit.key}
                name={fruit.name}
                cost={fruit.cost}
                count={fruit.count}
                deleted={() => this.props.deleted(fruit.key)}
                added={() => this.props.added(fruit.key)}
                removed={() => this.props.removed(fruit.key)} />
        })
        return (
            <div className='Products'>
                {fruits}
                <p>total price: {this.props.totalPrice} $</p>
                {this.props.totalPrice ?
                    <Link to='/orders'>
                        <button style={{ margin: '20px', padding: '4px', borderRadius: '15px', width: '100px', cursor: 'pointer' }}>Buy !</button>
                    </Link> : null}
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

const dispatchActions = dispatch => {
    return {
        deleted: (key) => dispatch({ type: 'DELETE', key: key }),
        added: (key) => dispatch({ type: 'ADD', key: key }),
        removed: (key) => dispatch({ type: 'REMOVE', key: key })
    }
}

export default connect(mapStateToProps, dispatchActions)(Products);