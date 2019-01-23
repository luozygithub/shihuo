import state from "./state"
import {GET_MOUTH,GET_BANNERS,GET_ClASSIFY,GET_SPECIAL,GET_USER,GET_ACCOUNT,GET_ALL,GET_RECOMMEND,GET_SHOPPING} from "./const"
const reducer = (prevState=state, action)=>{
    let new_state = {...prevState}
    switch (action.type){
        case GET_ClASSIFY:
            new_state.classify = action.classify
            break;
        case GET_SPECIAL:
            new_state.special = action.special
            break;
        case GET_ACCOUNT:
            new_state.account = action.account
            break;
        case GET_ALL:
            new_state.all = action.all
            break;
        case GET_RECOMMEND:
            new_state.recommend = action.recommend
            break;
        case GET_SHOPPING:
            new_state.shopping = action.shopping
            break;
        case GET_USER:
            new_state.user = action.user
            break;
        case GET_BANNERS:
            new_state.banners = action.banners
            break;
        case GET_MOUTH:
            new_state.mouth = action.mouth
            break;    
        default:
            break;
    }
    return new_state;
}
export default reducer;