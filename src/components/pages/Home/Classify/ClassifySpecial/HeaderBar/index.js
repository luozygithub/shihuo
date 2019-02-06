import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../modules/groups"
import {NavLink} from "react-router-dom"
class HeaderBar extends Component{
    componentWillMount(){
        this.props.getSpecial();
    }
    renderBar(){
        let {special} = this.props;
        if(!special) return ""
        return special.map(item=>{
            return (
                <NavLink to={{
                    pathname:"/home/range",
                    search:"?range=" + item.range + "&brand=" + item.brand
                }} key={item.id} className="item">
                    <img src={item.img} alt=""/>
                    <span>{item.title}</span>
                </NavLink>
            )
        })
    }
    render(){
        return (
            <div className="headerbar">
                {this.renderBar()}
            </div>
        )
    }
}
export default GroupState(HeaderBar,{
    reducer:"discover",
    states:["special"]
})