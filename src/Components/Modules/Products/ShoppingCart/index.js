import React, { Component } from 'react';
import Collection from 'react-materialize/lib/Collection';
import { CollectionItem } from 'react-materialize';

//Store
import store from '../../../../store';
import Icon from 'react-materialize/lib/Icon';
import { removeFromCart } from '../../../../actionCreatos';

export default class ShoppingCart extends Component {
  constructor(){
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }

    store.subscribe(()=> {
      this.setState({
        cart: store.getState().cart
      });
    });
  }

  removeFromCart(product){
    store.dispatch(removeFromCart(product));
  }

  render() {
    return (
      <Collection header='Carrito'>
          {
            this.state.cart.map((product,index) => (
              <CollectionItem key={index}>
                {product.title } - {product.price}
                <a onClick={(e)=> this.removeFromCart(product)} href="#!">
                  <i
                    className="material-icons right red-text">
                    cancel
                  </i>
                </a>
              </CollectionItem>
            ))
          }
          <CollectionItem>
            <strong>
              Total:
            </strong>
            <em>
              $
              {/* ${this.state.cart.reduce((sum,product)=>( sum + product.price))} */}
            </em>
          </CollectionItem>

      </Collection>
    );
  }
}