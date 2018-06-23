import React from 'react';
import Collection from 'react-materialize/lib/Collection';
import { CollectionItem } from 'react-materialize';
import {connect} from 'react-redux';

//Store
import store from '../../../../store';
import Icon from 'react-materialize/lib/Icon';
import { removeFromCart } from '../../../../actionCreatos';

 const ShoppingCart = (props) => {
    return (
      <Collection header='Carrito'>
          {
            props.cart.map((product,index) => (
              <CollectionItem key={index}>
                {product.title } - {product.price}
                <a onClick={(e)=> props.removeFromCart(product)} href="#!">
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
              $ {props.cart.reduce((a,b) => a+b.price,0)}
            </em>
          </CollectionItem>

      </Collection>
    );
  
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };

}

const mapDispatchToProps = dispatch => (
  {
    removeFromCart(product){
      dispatch(removeFromCart(product));
    }
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);