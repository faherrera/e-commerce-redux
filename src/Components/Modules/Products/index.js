import React from 'react';
import {Switch,Route} from 'react-router-dom';

//Componets-Pages

import List from './List';

const Products = ({match}) =>
(
  <Switch>
    <Route exact path={`${match.url}`} component={List}/>
  </Switch>
);

export default Products;