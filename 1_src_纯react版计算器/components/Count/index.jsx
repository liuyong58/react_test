import React, { Component } from 'react';


export default class Count extends Component {
  state = {count:0}
  
//加法
  increment=()=>{
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count:count+value*1})
  }
//   减法
  decrement=()=>{
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count:count-value*1})
  }
//   奇数加
  incrementifodd=()=>{
    const {value} = this.selectNumber
    const {count} = this.state
    if (count%2 !==1){
        this.setState({count:count+value*1})
    }
    
  }
//   异步加
  incrementsync=()=>{
    const {value} = this.selectNumber
    const {count} = this.state
   
    setTimeout(()=>{
        this.setState({count:count+value*1})
    },1000)
        
    
  }


  render() {
    return <div>
         <h1>当前求和为:{this.state.count}</h1>
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
