import React, { Component } from 'react';

export default class Count extends Component {
 
  increment=()=>{
      const {value} = this.selectNumber
      this.props.jia(value*1)

  }
  decrement=()=>{
      const {value} = this.selectNumber
      this.props.jian(value*1)

  }
  incrementifodd=()=>{
      const {value} = this.selectNumber
      if (this.props.count %2 ==1){
          this.props.jia(value*1)
      }

      
  }
  incrementsync=()=>{
      const {value} = this.selectNumber
      this.props.jianAsync(value*1,500)
  }
  render() {
    return <div>
         <h1>当前求和为:{this.props.count}</h1>
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
