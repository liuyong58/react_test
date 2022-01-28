// 该文件为count组件生成action对象

// function createIncrement(data){
//     return {type:'increment',data}
// }

// function createDecrement(data){
//     return {type:'decrement',data}
// }
import { DECREMENT,INCREMENT } from "./constant"
export const createIncrement = data=>({type:INCREMENT,data:data})
export const createDecrement = data=>({type:DECREMENT,data:data})
