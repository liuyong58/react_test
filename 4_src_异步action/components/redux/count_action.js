// 该文件为count组件生成action对象

// function createIncrement(data){
//     return {type:'increment',data}
// }

// function createDecrement(data){
//     return {type:'decrement',data}
// }
import { DECREMENT,INCREMENT } from "./constant"

// 同步action，就是指action的返回值为object的一般类型
export const createIncrement = data=>({type:INCREMENT,data:data})
export const createDecrement = data=>({type:DECREMENT,data:data})
// 异步action，就是指action的返回值为函数,异步action中一般都会调用同步action
export const createAsyncIncrement = (data,time)=>{

    return (dispatch)=>{
        
        setTimeout(()=>{
            
            dispatch(createIncrement(data))
        },time)
    }
}
