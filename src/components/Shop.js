import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ADD_TO_CART, INCREASE_TOTAL } from "../store";
import products from "../products";
import "./components.css";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      name: store.getState().login,
      products: [],
      total: store.getState().total,
    };
  }

  componentDidMount() {
    this.setState({ products: products });
    store.subscribe(()=>{this.setState({total: store.getState().total})})
  }

  addToCart(product, price) {
      console.log(product, price)
    let actionAddProduct = {
      type: ADD_TO_CART,
      payload: product
    };

    let actionIncrementPrice = {
        type: INCREASE_TOTAL,
        payload: price
    }

    store.dispatch(actionAddProduct);
    store.dispatch(actionIncrementPrice);

  }

  componentWillUnmount(){
      
  }

  render() {
    return (
      <div className="SHOP">
        <h1>Welcome: {this.state.name ? this.state.name : 'Chocolate-Lover'}</h1>
        <h2>Cart Total: {this.state.total}</h2>
        <Link to="/cart">
          {" "}
          <button className="cart-button">Cart</button>
        </Link>
        <div className="products-container">
          {this.state.products && this.state.products.map((product, index) => {
            return (
              <div key={index} className="product-div">
                <h3>{product.name}</h3>
                <img className="product-imgs" alt='product' src={product.img} />
                <h3>{product.price}</h3>
                <button
                  className="add-to-cart-button"
                  onClick={() => {this.addToCart(product, product.price)}}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Shop;
