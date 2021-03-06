/* 
  包含多个 reducer 函数：根据老的 state 和指定的 action 返回新的 state
*/
import {combineReducers} from 'redux'

function xxx (state = 0, action) {
  return state
}

function yyy (state = 0, action) {
  return state
}

export default combineReducers({
  xxx,
  yyy
})
// 向外暴露的状态的结构：{xxx: 0, yyy: 0}