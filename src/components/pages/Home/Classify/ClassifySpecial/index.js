import React,{Component} from "react"
import "./index.scss"
import qs from "qs"
import {withRouter,Switch, Route, NavLink} from "react-router-dom"
import HeaderBar from "./HeaderBar"
import HeaderSwiper from "./HeaderSwiper"
import HotActivity from "./HotActivity"
import ListAccount from "./ListAccount"
import SpecialBar from "./SpecialBar"
import { NavBar, Icon } from 'antd-mobile';
import {
    All,
    Recommend,
    Shopping,
    User
} from "./SpecialBar/Spages" 
class ClassifySpecial extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow:false,
            goTop:false
        }
        this.toggle = this.toggle.bind(this)
    }
    componentWillMount(){
        console.log(this.state.isShow)
        let {pathname} = this.props.location;
        let {search} = this.props.location;
        if(pathname === "/home/classifyspecial"){
            this.props.history.replace("/home/classifyspecial/all" + search)
        }
        window.addEventListener("scroll",()=>{
            if(document.documentElement.scrollTop > 200){
                if(!this.state.goTop){
                    this.setState({
                        goTop:true
                    })
                }
            }else{
                if(this.state.goTop){
                    this.setState({
                        goTop:false
                    })
                }
            }
        })
    }
    renderRoutes(){
        let {routes} = this.props;
        return (
            <Switch>
                {
                    routes.map(item=>{
                        return (
                            <Route key={item.id} path={item.path} component={item.component} exact={item.exact}></Route>
                        )
                    })
                }
            </Switch>
        )
    }
    toggle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    goTop(){
        document.documentElement.scrollTop = 0
    }
    render(){
        // console.log(this.props)
        // let content = this.props.location.search.replace("?","");
        // let obj = qs.parse(content);
        let content = this.props.location.search.replace("?", "");
        let obj = qs.parse(content)
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.replace("/home")}
                    rightContent={[
                        <Icon key="1" type="ellipsis" onClick={this.toggle} />,
                    ]}
                >{obj.name}专区</NavBar>
                <div className="toast" style={{display:(this.state.isShow?"":"none")}}>
                    <NavLink to={"/home"}>首页</NavLink>
                    <NavLink to={"/home"}>我的</NavLink>
                </div>
                <HeaderBar></HeaderBar>
                <HeaderSwiper></HeaderSwiper>
                <HotActivity></HotActivity>
                <ListAccount></ListAccount>
                <SpecialBar></SpecialBar>
                {this.renderRoutes()}
                {this.state.goTop?<div className="goTop" onClick={this.goTop}>go</div>:""}
            </div>
        )
    }
}
ClassifySpecial.defaultProps={
    routes:[
        {id:1, path:"/home/classifyspecial/all", component:All, exact:false},
        {id:2, path:"/home/classifyspecial/recommend", component:Recommend,exact:false},
        {id:3, path:"/home/classifyspecial/shopping", component:Shopping,exact:false},
        {id:4, path:"/home/classifyspecial/user", component:User,exact:false},
    ]
}
export default withRouter(ClassifySpecial)