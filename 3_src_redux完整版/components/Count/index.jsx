import React, { Component } from 'react';
import store from '../redux/store';
import { createIncrement,createDecrement } from "../redux/count_action"
export default class Count extends Component {
 
  increment=()=>{
      const {value} = this.selectNumber
      store.dispatch(createIncrement(value*1))
  }
  decrement=()=>{
      const {value} = this.selectNumber
      store.dispatch(createDecrement(value*1))
  }
  incrementifodd=()=>{
      const {value} = this.selectNumber
      const count = store.getState()
      if (count % 2 !==0) {
        store.dispatch(createIncrement(value*1))
      }
      
  }
  incrementsync=()=>{
      const {value} = this.selectNumber
      setTimeout(()=>{
        store.dispatch(createIncrement(value*1))
      },1000)
  }
  render() {
    return <div>
         <h1>当前求和为:{store.getState()}</h1>
         <select ref={c=>this.selectNumber=c}>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
         </select>&nbsp;
         <button onClick={this.increment}>+</button>&nbsp;
         <button onClick={this.decrement}>-</button>&nbsp;
         <button onClick={this.incrementifodd}>奇数再加</button>&nbsp;
         <button onClick={this.incrementsync}>异步加</button>&nbsp;
    </div>;
  }
}
