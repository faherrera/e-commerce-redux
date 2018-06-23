import axios from 'axios';

const addToCart = product => (
 {
    type: "ADD_TO_CART",
    product
  }
);

const removeFromCart = product => (
 {
    type: "REMOVE_FROM_CART",
    product
  }
);

const loadProducts = () => {
  return dispatch =>(
    axios.get("http://localhost:3001/products")
    .then(
      res => dispatch({
        type:"REPLACE_PRODUCTS",
        products:{
          loading:false,
          data:res.data
        }
      })
    )
  )
}

export {addToCart,removeFromCart,loadProducts};