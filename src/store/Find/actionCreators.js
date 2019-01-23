import BannerData from "../../statics/BannerData"
import HotBanner from "../../statics/HotBanner"
import Swiperlist from "../../statics/SwiperList"
import {Get} from "../../modules/axios-util"
import {CHANGE_FIND_BANNERS,CHANGE_FIND_HOTBAN,CHANGE_FIND_LIST,CHANE_FIND_CONTENT,CHANE_FIND_CONTENTTWO} from "./const"
export default{
    getFindBanners(callback){  
         let banners = BannerData;
        //  console.log(banners)
         let action = {
             type:CHANGE_FIND_BANNERS,banners:banners
         };
         callback&&callback();
         return action   
    },
    getHotBanners(callback){
        let hotbanners = HotBanner;
        // console.log(hotbanners)
        let action = {
            type:CHANGE_FIND_HOTBAN,hotbanners:hotbanners,
        };
        callback&&callback();
        // console.log(action.hotbanners)
        return action
    },
    getSwiperList(callback){
        let swiperlists = Swiperlist;
        let action = {
            type:CHANGE_FIND_LIST,swiperlists:swiperlists, 
        };
        callback&&callback();
        // console.log(swiperlists)
        console.log(action)
        return action
    },
    getListContent(){
        return dispatch=>{
            Get({
                url:"/find/mobileList?tag_id=283&param_str="
            }).then(res=>{
                // console.log(res.data)
                let data = res.data.data;
                let listcontents = [];
                    data.forEach(item=>{
                        listcontents = listcontents.concat(item)
                    })
                    dispatch({
                        type:CHANE_FIND_CONTENT,listcontents
                    })
            })
        }
    },
    getListContentTwo(){
        return dispatch=>{
            Get({
                url:"/find/mobileList?tag_id=270&param_str="
            }).then(res=>{
                // console.log(res.data)
                let data = res.data.data;
                let listcontentTwo = [];
                    data.forEach(item=>{
                        listcontentTwo = listcontentTwo.concat(item)
                    })
                    dispatch({
                        type:CHANE_FIND_CONTENTTWO,listcontentTwo
                    })
            })
        }
    },

}