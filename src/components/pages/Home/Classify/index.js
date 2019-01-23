import React,{Component} from "react"
import GroupState from "../../../../modules/groups"
import "./index.scss"
import {NavLink} from "react-router-dom"
class Classify extends Component{ 
    componentDidMount(){
        this.props.getClassify();
    }
    renderItem(){
        let {classify} = this.props;
        if (!classify) return ""
        return(
            classify.map(item=>(
                <NavLink to={{
                    pathname:item.pathname,
                    search:"?name="+item.name
                }} key={item.id} className="zone0">
                    <div className="tit">
                        <h2>{item.title}</h2>
                        <p className="subtit">{item.text}</p>
                    </div>
                    <div className="pic">
                        <img src={item.img} alt=""/>
                    </div>
                </NavLink>
            ))
        )
    } 
    render(){
        return (
            <div className="pic_banner">
                {this.renderItem()}
            </div>
        )
    }
}
export default GroupState(Classify,{
    reducer:"discover",
    states:["classify"]
});