import {CHANGE_HOME_NAVS,CHANGE_HOME_BANNERS} from "./const"
import {Get} from "../../modules/axios-util"
export default {
    getHomeNavs(callback){
        return dispatch=>{
            Get({ url:"/sk/api/home/home_page_head?c_platform_type=0&c_app_ver=6.0.0&c_upk="}).then(res=>{
                let navs = res.data.tabs;
                callback&&callback();
                dispatch({type:CHANGE_HOME_NAVS,navs})
            })
        }
    },
    // getHomeBanners(callback){
    //     return dispatch=>{
    //         Get({ url: "/sk/api/home/home_page?code=1&c_platform_type=0&c_app_ver=6.0.0&c_upk=" }).then(res => {
    //             let banners = res.data.floors[0].list;
    //             callback && callback();
    //             dispatch({ type: CHANGE_HOME_BANNERS, banners })
    //         })
    //     }
    // }
    
}