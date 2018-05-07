import React from 'react';
import {Switch,Route} from 'react-router-dom';

///Modules
import Products from './../../../Modules/Products/';

const Main = ({match}) => (
  <main>
    <Switch>
      <Route exact path={`/`} component={Products} />
      <Route path={`/productos`} component={Products} />
    </Switch>
  </main>
);

export default Main;