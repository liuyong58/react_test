// 引入常量
import { ADD_PERSON } from "../constant";
// 引入ac

// 初始化状态
const initstate = [{id:'001',name:'xiao',age:18}]

export default function personReducer(prestate=initstate,action) {
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
            
            return [data,...prestate]
    
        default:
            return prestate
    }
}