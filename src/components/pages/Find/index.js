import React,{Component} from "react"
import "./index.scss"
import Banner from "./Banner"
import {Route} from "react-router-dom"
import SmallRoute from "./SmallRoute"
import HotTopic from "./HotTopic"
import SwiperList from "./SwiperList"
import ListOne from "./List/ListOne"
import ListTwo from "./List/ListTwo"
import GroupState from "../../../modules/groups"
import {withRouter} from "react-router-dom"
import AppFooter from "./../../commons/AppFooter"
class Find extends Component{
   
    render(){
        return (
            <div className="index">
                <Banner/>
                <SmallRoute/>
                <HotTopic/>
                <SwiperList/>
                <Route path="/find/listone" component={ListOne}/>
                <Route path="/find/listtwo" component={ListTwo}/>
                <AppFooter/>
            </div>
        )
    }
}
export default withRouter(GroupState(Find,{
    reducer:"find",
    states:["ListOne","ListTwo"]
}));