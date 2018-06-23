import React, { Component } from 'react';
import Container from 'react-materialize/lib/Container';
import { Row,Card,CardTitle,Col,Button,Icon, Collection } from 'react-materialize';
import CollectionItem from 'react-materialize/lib/CollectionItem';
import {connect} from 'react-redux';


//Components 
import ShoppingCart from './../ShoppingCart/';

//Datos
import data from './../../../../data.js';

//Store
import store from '../../../../store';
import { addToCart } from '../../../../actionCreatos';
import ProgressBar from 'react-materialize/lib/ProgressBar';


const TableList = ({products,addToCart}) => {
  console.log('====================================');
  console.log("Esto tiene el products",products);
  console.log('====================================');


  return !products 
        ? <strong> No hay nada </strong>
        :
        products.data.map(product => (
    <Col s={12} m={4} key={product.id}>
      <Card header={<CardTitle reveal image={product.pathImage} waves='light'/>}
          title={product.title}
          reveal={
            <div className="texting">
              <p>
                {product.description}
              </p>
              
              <p className="row">
                <Button  
                  onClick={()=> addToCart(product)}
                  floating  
                  className='white red darken-3 right' 
                  waves='light' 
                  icon='favorite_border' />
              </p>
            </div>
        }>
          
      </Card>
    </Col>
  ))
}
const List = (props) =>  {
    let {products} = props;

    return (
      <Container>
        <Row>
          <Col s={12} m={9}>
            <div className="row">
              
              {
                products.loading 
                ?
                <ProgressBar />
                : 
                <TableList
                  products={props.products}
                  addToCart={props.addToCart}
                />      
              }
            
            </div>
          </Col>

          <Col className="red lighten-3" s={12} m={3}>
            <ShoppingCart />
          </Col>

        </Row>
      </Container>
    );
}


const mapStateToProps = state => {
  return {
    products: state.products
  };

}

const dispatchToProps = dispatch => (
  {
    addToCart(product){
      console.log(product);
      store.dispatch(addToCart(product));
    }
  }
) 

export default connect(mapStateToProps,dispatchToProps)(List);
  

