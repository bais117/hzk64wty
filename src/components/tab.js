import React, { Component } from 'react';
import './tab.css'
class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
         data:[],
         currDivId: 0
    }
  }

  componentDidMount=() => {
      let data = [
          {id:0,tittle:'按钮1',content:'内容1'},
          {id:1,tittle:'按钮2',content:'内容2'},
          {id:2,tittle:'按钮3',content:'内容3'}
      ]
      this.setState({
          data
      })
  }
  changTab=(ID) => {
    //   console.log(ID)
    this.setState({
        currDivId:ID
    })
  }
  render() {
      let btns = []
      let divs = []
      this.state.data.forEach((item,i)=>{
          btns.push(<button key={item.id} onClick={this.changTab.bind(this,item.id)}>{item.content}</button>)
          divs.push(<div key={item.id} className={this.state.currDivId=== i?'active':''}>{item.content}</div>) 
        })
    return <div className="tab">
    {/* 切换 */}
    {/* <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button> */}
    {btns}
    {/* <div>1</div>
    <div>2</div>
    <div>3</div> */}
    {divs}
    </div>
  }
} 
 
export default Tab
