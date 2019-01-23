import state from "./state"
import {CHANGE_HOME_NAVS,CHANGE_HOME_BANNERS} from "./const"
const reducer = (prevState=state,action)=>{
    let new_state = {...prevState};
    switch (action.type) {
        case CHANGE_HOME_NAVS:
            new_state.navs = action.navs;  
            break;
        case CHANGE_HOME_BANNERS:
            new_state.banners = action.banners;
            break;
        default:
            break;
    }
    return new_state;
}
export default reducer;