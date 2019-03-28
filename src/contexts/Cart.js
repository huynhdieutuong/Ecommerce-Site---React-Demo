import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.cart = JSON.parse(localStorage.getItem('cartItems'));
    if(!this.cart) {
      this.cart = [];
    }
    this.state = {
      cartItems: this.cart
    };

    this.addToCart = this.addToCart.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
  }

  addToCart(product) {
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }

  render() {
    return (
      <CartContext.Provider value={{
        cartItems: this.state.cartItems,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}