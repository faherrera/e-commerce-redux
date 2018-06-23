const initialState = {
  products:{
    loading:true,
    error:false,
    data:[]
  },
  cart:[]
}

const products = (state = initialState.products,action) => {

  if (action.type == "REPLACE_PRODUCTS") {
    return action.products;
  }
  
  return state;
}
const cart = (state = initialState.cart,action) => {

 
  if (action.type === "ADD_TO_CART") {
    return state.concat(action.product)
  }

  if(action.type === "REMOVE_FROM_CART"){
    return state.filter(product => product.id !== action.product.id)

  }
  return state;
}

export {
  products,
  cart
}