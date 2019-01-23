import state from "./state"
import {CHANGE_DISCONTS_LIST} from "./const"
const reducer = (prevState=state,action)=>{
    let new_state = {...prevState};
    switch(action.type){
        case CHANGE_DISCONTS_LIST:
            new_state.youhuilist = action.list;
            break;
        default:
            break;
    }
    return new_state;
}
export default reducer;