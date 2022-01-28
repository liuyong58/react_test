// 引入Count组件的UI组件
import CountUI from "../../components/Count"
// 引入redux
import store from "../../components/redux/store"
// 连接ui组件
import { connect} from "react-redux"
export default connect()(CountUI)