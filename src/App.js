import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

//Layout
import General from './Components/Layout/General/';

const App = () => (

  <Switch>
    <Route exact path="/" component={General} />
    <Route path="/" component={General} />

  </Switch>
);

export default App;
