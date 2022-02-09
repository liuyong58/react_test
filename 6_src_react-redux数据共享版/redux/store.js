import { createStore,applyMiddleware,combineReducers } from "redux";
// 引入count组件的reducer
import countReducer from "./reducers/count";
// 引入person组件的reducer
import personReducer from "./reducers/person";
// 引入redux-thunk,用于支持异步action
import thunk from "redux-thunk";

// 合并多个reducer
const allReducers = combineReducers({
    he:countReducer,
    ren: personReducer
})

export default createStore(allReducers,applyMiddleware(thunk))