import React, { Component } from 'react';
import Container from 'react-materialize/lib/Container';
import { Row,Card,CardTitle,Col,Button,Icon, Collection } from 'react-materialize';
import CollectionItem from 'react-materialize/lib/CollectionItem';


//Components 
import ShoppingCart from './../ShoppingCart/';

//Datos
import data from './../../../../data.js';

//Store
import store from '../../../../store';
import { addToCart } from '../../../../actionCreatos';


export default class List extends Component {
  constructor(){
    super();

    this.addToCart  = this.addToCart.bind(this);

  }
  GetAllProducts(){    
    return data.products.map( product => (
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
                      onClick={()=> this.addToCart(product)}
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

  addToCart(product){
    console.log(product);
    store.dispatch(addToCart(product));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col s={12} m={9}>
            <div className="row">
              
              {this.GetAllProducts()}
            
            </div>
          </Col>

          <Col className="red lighten-3" s={12} m={3}>
            <ShoppingCart />
          </Col>

        </Row>
      </Container>
    );
  }
}