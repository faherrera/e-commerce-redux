import React, { Component } from 'react';

//Assets
import './general.css';

//Components 
import Header from './Header/';
import Foo from './Footer/';
import Main from './Main/';



class  General extends Component {
  render() {

    console.log("Este es el props",this.props);
    return (
      
      <div className="general-wrapper">
        <Header/>
          <Main {...this.props}/>
        <Foo/>
      
      </div>
    );
  }
}


export default General;