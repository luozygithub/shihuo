import React,{Component} from "react"
import "./index.scss"
import Banner from "./Banner"
import {Route} from "react-router-dom"
import SmallRoute from "./SmallRoute"
import HotTopic from "./HotTopic"
import SwiperList from "./SwiperList"
import ListOne from "./List/ListOne"
import ListTwo from "./List/ListTwo"
import ListDetail from "./List/ListDetail"
import GroupState from "../../../modules/groups"
import {withRouter} from "react-router-dom"
import ListThree from "./List/ListThree";
import ListFour from "./List/ListFour";
import Beta from "./SmallRoute/Beta";
import Part from "./SmallRoute/Part";
import FooterNav from "../../commons/AppFooter"
class Find extends Component{
    renderbanner(){
        let {pathname} = this.props.location;
        // console.log(pathname)
        if(pathname.indexOf("/listdetail")>-1) return  "";
        if(pathname.indexOf("/find/beta")>-1) return  "";
        if(pathname.indexOf("/find/part")>-1) return  "";
        return <Banner/>
    }
    rendersmallroute(){
        let {pathname} = this.props.location;
        // console.log(pathname)
        if(pathname.indexOf("/listdetail")>-1) return  "";
        if(pathname.indexOf("/find/beta")>-1) return  "";
        if(pathname.indexOf("/find/part")>-1) return  "";
        return <SmallRoute/>
    }
    renderHottopic(){
        let {pathname} = this.props.location;
        // console.log(pathname)
        if(pathname.indexOf("/listdetail")>-1) return  "";
        if(pathname.indexOf("/find/beta")>-1) return  "";
        if(pathname.indexOf("/find/part")>-1) return  "";
        return <HotTopic/> 
    }
    renderSwiperlist(){
        let {pathname} = this.props.location;
        // console.log(pathname)
        if(pathname.indexOf("/listdetail")>-1) return  "";
        if(pathname.indexOf("/find/beta")>-1) return  "";
        if(pathname.indexOf("/find/part")>-1) return  "";
        return <SwiperList/>
    }
    render(){
        return (
            <div className="index">
                {this.renderbanner()}
                {this.rendersmallroute()}
                {this.renderHottopic()}
                {this.renderSwiperlist()}
                <Route path="/find/listone" component={ListOne}/>
                <Route path="/find/listtwo" component={ListTwo}/>
                <Route path="/find/listthree" component={ListThree}/>
                <Route path="/find/listfour" component={ListFour}/>
                <Route path="/listdetail" component={ListDetail}/>
                <Route path="/find/beta" component={Beta}/>
                <Route path="/find/part" component={Part}/>
                <FooterNav></FooterNav>
            </div>
        )
    }
}
export default withRouter(GroupState(Find,{
    reducer:"find",
    states:["ListOne","ListTwo","ListThree"]
}));