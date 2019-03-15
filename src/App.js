import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import Tab from './components/tab';


class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state= {
  //        data:[],
  //        currDivId: 0
  //   }
  // }
  render() {
    return (
      <div>
       <Button type="primary">primary</Button>
      </div>
    );
  }
}

export default App;
