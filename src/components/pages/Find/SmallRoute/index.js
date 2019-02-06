import React,{Component} from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
import {withRouter} from "react-router-dom"
// import Beta from "../Beta"
class SmallRoute extends Component{
    renderSmallroute(){
        let {smallnavs} = this.props;
        console.log(smallnavs)
        return smallnavs.map(item=>(
            <NavLink activeClassName="actived" key={item.id} 
                to={{pathname:item.path,
                    search:"?title="+item.title}}>
                <i className={"fa fa-"+ item.icon}></i>
                <span>{item.title}</span>
            </NavLink>
        ))
    }
    render(){
        return (
            <div className="smallRoute">
               {this.renderSmallroute()}
            </div>
        )
    }
}
SmallRoute.defaultProps = {
    smallnavs:[
        {id:1,path:"/find/beta",icon:"home",title:"公测"},
        {id:2,path:"/find/part",icon:"columns",title:"栏目"},
        {id:3,path:"/find/new",icon:"fire",title:"最新"},
        {id:4,path:"/find/hot",icon:"thermometer-full",title:"最热"},
    ]
}
export default withRouter(SmallRoute);