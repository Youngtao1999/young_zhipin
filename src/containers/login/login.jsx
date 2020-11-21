/* 
  登录路由组件
*/
import React, { Component } from 'react'
import {
  NavBar, 
  WingBlank, 
  List, 
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'
export default class Login extends Component {

  state = {
    username: '', // 用户名
    password: ''  // 密码
  }

  login = () => {
    console.log(this.state);
  }

  handleChange = (name, value) => {
    // 更新状态
    this.setState({
      [name]: value
    })
  }

  toRegister = () => {
    this.props.history.replace('/register')
  }

  render() {
    return (
      <div>
        <NavBar mode='dark'>小&nbsp;杨&nbsp;直&nbsp;聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem onChange={value => this.handleChange('username', value)} placeholder='请输入用户名'>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem onChange={value => this.handleChange('password', value)} type="password" placeholder='******'>密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>
            <Button onClick={this.login} type='primary'>登&nbsp;&nbsp;陆</Button>
            <WhiteSpace/>
            <Button onClick={this.toRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}