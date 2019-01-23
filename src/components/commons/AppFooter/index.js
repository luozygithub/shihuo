import React,{Component} from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
class AppFooter extends Component{

    renderFooter(){
        let {navs} = this.props;
        return navs.map(item=>(
            <NavLink replace exact={item.exact} key={item.id} to={{pathname:item.path}}>
                <i className={"fa fa-" + item.icon}></i>
                <span>{item.title}</span>
            </NavLink>
        ))
    }
    render(){
        return (
            <footer className="app-footer">
                {this.renderFooter()}
            </footer>
        )
    }
}
AppFooter.defaultProps = {
    navs:[
        { id: 1, icon: "home", title: "首页" ,path:"/home",exact:false},
        { id: 2, icon: "tags", title: "优惠", path: "/discounts"},
        { id: 3, icon: "compass", title: "发现", path: "/find"},
        { id: 4, icon: "paw", title: "装备", path: "/equipment"},
        { id: 5, icon: "superpowers", title: "更多", path: "/more"},
    ]
}
export default AppFooter;