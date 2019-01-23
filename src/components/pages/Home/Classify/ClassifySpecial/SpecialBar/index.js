import React,{Component} from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
class SpecialBar extends Component{
    renderBar(){
        let {bars} = this.props;
        return bars.map(item=>(
            <NavLink activeClassName="actived" to={{
                pathname:item.pathname
            }} key={item.id}>{item.txt}</NavLink>
        ))
    }
    render(){
        return (
            <div className="specialbar">
                {this.renderBar()}
            </div>
        )
    }
}
SpecialBar.defaultProps = {
    bars:[
        {id:1, txt: "全部", pathname:"/home/classifyspecial/all"},
        {id:2, txt: "单品推荐", pathname:"/home/classifyspecial/recommend"},
        {id:3, txt: "达人清单", pathname:"/home/classifyspecial/shopping"},
        {id:4, txt: "用户晒物", pathname:"/home/classifyspecial/user"}
    ]
}
export default SpecialBar