import { INCREMENT,DECREMENT } from "../constant"


const initState = 0
export default function countReducer(preState=initState,action){
    switch (action.type) {
        case INCREMENT:
            return preState+action.data
        case DECREMENT:
            return preState-action.data
    
        default:
            return initState
    }
}