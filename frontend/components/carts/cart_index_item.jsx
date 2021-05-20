import React from 'react';
import { Link } from 'react-router-dom';

class CartIndexItem extends React.Component {

    render () {

        const { name, price, quantity, photo } = this.props;

        // debugger

        return (
            <div className="cart-index-items">
                {/* <h1>its me, the item in your cart</h1> */}
                <img className="cart-photo" src={photo}></img>
                <p>{name}</p>
                <p>{price}</p>
                <p>{quantity}</p>
            </div>
        )


    }



}

export default CartIndexItem;