import {CHANGE_DISCONTS_LIST} from "./const"
import {Get} from "../../modules/axios-util"
export default {
    update_list(callback){
        return dispatch=>{
            Get({ url:"/sh/youhui/list?r=999&page=1&page_size=30"}).then(res=>{
                let list = res.data.data;
                callback&&callback();
                dispatch({type:CHANGE_DISCONTS_LIST,list})
            })
        }
    }
}