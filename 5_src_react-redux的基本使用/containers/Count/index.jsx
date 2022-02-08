// 引入Count组件的UI组件
import CountUI from "../../components/Count"
// 连接ui组件
import { connect} from "react-redux"
// 引入action对象
import { createIncrement,createDecrement,createAsyncIncrement } from "../../redux/count_action"
// 映射状态
function mapStateToProps(state){
    return {count:state}
}
// const mapStateToProps = state => ({count:state})
// 映射操作状态方法
// function mapDispatchToProps(dispatch){
//     return {
//         jia:number=>
//             // 通知redux执行加法
//             dispatch(createIncrement(number)),
//         jian: number=>dispatch(createDecrement(number)),
//         jianAsync:(number,time)=>dispatch(createAsyncIncrement(number,time))
        
//     }
// }
export default connect(mapStateToProps ,{
    jia:createIncrement,
    jian: createDecrement,
    jianAsync:createAsyncIncrement
    
})(CountUI)