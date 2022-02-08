import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createIncrement,createDecrement } from "../../redux/count_action"
class Count extends Component {
  add=()=>{
      this.props.jia(1)
  }
  decrease=()=>{
      this.props.jian(1)
  }
  render() {
    return <div>
        <h2>当前求和为：{this.props.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.decrease}>点我-1</button>
    </div>;
  }
}


export default connect(
    state=>({count:state}),//映射状态
    {
    jia:createIncrement,
    jian: createDecrement
    }//映射操作状态
)(Count)
