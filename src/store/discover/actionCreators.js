import classify from "../../static/classify"
import special from "../../static/special"
import account from "../../static/account"
import banners from "../../static/banners"
import {Get} from "../../modules/axios-util"
import {GET_RANGE,GET_MOUTH,GET_BANNERS,GET_ClASSIFY,GET_SPECIAL,GET_USER,GET_ACCOUNT,GET_ALL,GET_RECOMMEND,GET_SHOPPING} from "./const"
export default {
    getClassify(){
        let action = {
            type:GET_ClASSIFY,
            classify:classify
        }
        return action
    },
    getSpecial(){
        let action = {
            type:GET_SPECIAL,
            special:special
        }
        return action
    },
    getAccount(){
        let action = {
            type:GET_ACCOUNT,
            account:account
        }
        return action
    },
    getAll(callback){
        return dispatch=>{
            Get({url:" /getNews?pageSize=20&param_str=&type=basketball&newsId=&channel_type="}).then(res=>{
                let data = res.data.data;
                let all = [];
                data.forEach(item=>{
                    if(item.show_type === "single3"){
                        all = all.concat(item.data)
                    }
                })
                callback&&callback();
                dispatch({type:GET_ALL, all})
            })
        }
    },
    getRecommend(callback){
        return dispatch=>{
            Get({url:"/getNews?pageSize=20&param_str=&type=basketball&newsId=&channel_type=11"}).then(res=>{
                let data = res.data.data;
                let recommend = [];
                data.forEach(item=>{  
                    recommend = recommend.concat(item.data)
                })
                callback&&callback();
                dispatch({type:GET_RECOMMEND, recommend})
            })
        }
    },
    getShopping(callback){
        return dispatch=>{
            Get({url:"/getNews?pageSize=20&param_str=&type=basketball&newsId=&channel_type=12"}).then(res=>{
                let data = res.data.data;
                let shopping = [];
                data.forEach(item=>{  
                    shopping = shopping.concat(item.data)
                })
                callback&&callback();
                dispatch({type:GET_SHOPPING, shopping})
            })
        }
    },
    getUser(callback){
        return dispatch=>{
            Get({url:"/getNews?pageSize=20&param_str=&type=basketball&newsId=&channel_type=7"}).then(res=>{
                let data = res.data.data;
                let user = [];
                data.forEach(item=>{  
                    user = user.concat(item.data)
                })
                callback&&callback();
                dispatch({type:GET_USER, user})
            })
        }
    },
    getBanners(callback){
        let action = {
            type:GET_BANNERS,
            banners
        }
        callback && callback()
        return action;
    },
    getMouth(callback){
        return dispatch=>{
            Get({url:"/getComment?id=13&tag_id=0&page=1&page_size=5&sort=hot"}).then(res=>{
                let data = res.data.data;
                let mouth = data;
                callback&&callback();
                dispatch({type:GET_MOUTH, mouth})
            })
        }
    },
    getRange(range, brand, p){
        return dispatch=>{
            Get({url:"/sports/search?page="+p+"&page_size=20&range="+range+"&c=&sort=hot&brand="+brand+"&price=&keywords=&tag_type=&show_type=grid&type=1"}).then(res=>{
                let range = res.data.data;
                dispatch({type:GET_RANGE,range}) 
            })
        }
    }

}