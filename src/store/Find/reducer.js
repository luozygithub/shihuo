import state from "./state"
import {CHANGE_FIND_BANNERS,
        CHANGE_FIND_HOTBAN,
        CHANGE_FIND_LIST,
        CHANE_FIND_CONTENT,
        CHANE_FIND_CONTENTTWO,
        CHANE_FIND_CONTENTThree,
        CHANE_FIND_CONTENTFour,
        CHANGE_FIND_PARTLIST} from "./const"

const reducer = (prevState=state,action)=>{
    let new_state = {...prevState};
    switch (action.type) {
        case CHANGE_FIND_BANNERS:
            new_state.banners = action.banners;
            break;
        case CHANGE_FIND_HOTBAN:
            new_state.hotbanners = action.hotbanners;
            // console.log(action.hotbanners)
            break;
        case CHANGE_FIND_LIST:
            new_state.swiperlists = action.swiperlists;
            break;
        case CHANE_FIND_CONTENT:
            new_state.listcontents = action.listcontents;
            break;
        case CHANE_FIND_CONTENTTWO:
            new_state.listcontentTwo = action.listcontentTwo;
            break;
        case CHANE_FIND_CONTENTThree:
            new_state.listcontentThree = action.listcontentThree;
            break;
        case CHANE_FIND_CONTENTFour:
            new_state.listcontentFour = action.listcontentFour;
            break;
        case CHANGE_FIND_PARTLIST:
            new_state.partlist = action.partlist;
            break;
        default:
            break;
    }
    return new_state;
}
export default reducer;