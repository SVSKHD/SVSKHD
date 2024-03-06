import { combineReducers } from "redux"
// reducers
import themeReducer from "./reducers/themeReducer"


const rootReducer = combineReducers({
    theme: themeReducer
})

export default rootReducer