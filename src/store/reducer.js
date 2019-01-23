import {combineReducers} from "redux"
import discounts from "./discounts/reducer"
import home from "./home/reducer"
import discover from "./discover/reducer"
import find from "./Find/reducer"
const reducer = combineReducers({
    discounts,
    home,
    discover,
    find
})
export default reducer;