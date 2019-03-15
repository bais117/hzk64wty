import React, { Component } from 'react';
// import { Button } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import RouterCom from './router'

class App extends Component {
  
  render() {
    return (
      <div className='app'>
       <RouterCom />
      </div>
    );
  }
}

export default App;
