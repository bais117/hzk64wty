import React, { Component } from 'react';
import { NavBar,Flex,List,InputItem ,WhiteSpace,WingBlank,Button,Toast} from 'antd-mobile';
// import axios from 'axios'
import axios from '../../http'
import 'antd-mobile/dist/antd-mobile.css';
import './login.css'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state= {    
          uname:'',
          pwd:''
        }
      }
      changValue=(k,v) => {
        // console.log(k,v)
        this.setState({
          [k]:v
        })
      }
      handLogin= async()=> {
        const body = this.state
        const res = await axios.post(`users/login`,body)
        const history = this.props.history
        // console.log(res)
        const {data,meta} =res.data
        if(meta.status === 200) {
          history.push('/')
        }else {
          Toast.info(meta.msg, 2);
          this.setState({
            uname:'',
            pwd:''
          })
        }
        
      }
    render() {
      return (
        <div >
          <Flex direction='column' justify="center"> 
            <Flex.Item>
                <NavBar mode="dark">登录页面</NavBar>
                <WhiteSpace size="sm" />
            </Flex.Item>
            <Flex.Item>
                <List>
                  <WingBlank><InputItem value={this.state.uname} onChange={(v)=>{this.changValue('uname',v)}}  >姓名</InputItem></WingBlank>
                  <WingBlank><InputItem value={this.state.pwd} onChange={(v)=>{this.changValue('pwd',v)}} >密码</InputItem></WingBlank>
                  <WingBlank><Button type="warning" onClick={this.handLogin}>登录</Button></WingBlank>
                </List>
            </Flex.Item>
        </Flex>
        </div>
      );
    }
  }
  
  export default Login;