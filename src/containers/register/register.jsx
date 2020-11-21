/* 
  注册路由组件
*/
import React, { Component } from 'react'
import {
  NavBar, 
  WingBlank, 
  List, 
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'

import './register.css'
import Logo from '../../components/logo/logo'

const ListItem = List.Item
export default class Register extends Component {

  state = {
    username: '',  // 用户名
    password: '',  // 密码
    paddword2: '',  // 确认密码
    type: '求职者',  // 用户类型名称 求职者or招聘者
  }

  register = () => {
    console.log(this.state);
  }

  // 处理输入数据的改变：更新对应的状态
  handleChange = (name, value) => {
    // 更新状态
    this.setState({
      [name]: value // 属性名不是name，而是name变量的值
    })
  }

  // 进入登录界面
  toLogin = () => {
    this.props.history.replace('/login')
  }

  render() {
    const {type} = this.state
    return (
      <div>
        <NavBar mode='dark'>小&nbsp;杨&nbsp;直&nbsp;聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem onChange={value => {this.handleChange('username', value)}} placeholder='请注册用户名'>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem onChange={value => {this.handleChange('password', value)}} type="password" placeholder='请输入密码'>密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>
            <InputItem onChange={value => {this.handleChange('password', value)}} type="password" placeholder='请输入确认密码'>确认密码：</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>用户类型：</span>
              <Radio onChange={() => this.handleChange('type', '求职者')} checked={type==='求职者'} className='my-radio'>求职者</Radio>
              <Radio onChange={() => this.handleChange('type', '招聘者')} checked={type==='招聘者'}className='my-radio'>招聘者</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>已有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
