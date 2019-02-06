import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../modules/groups"
import {NavLink} from "react-router-dom"
class ListFour extends Component{
    componentWillMount(){
        this.props.getListContentFour();
        console.log(this.props)
    }
    renderListcontent(){
        let {listcontentFour} = this.props;
        if(!listcontentFour) return "";
        return listcontentFour.map(item=>(
            <NavLink to={{
                pathname:"/listdetail",
                search:"?title="+item.data.title+"&url="+item.data.img+"&introduce="+item.data.intro
            }}
            key={item.data.title}
            >
            <div className="Content" key={item.data.href}>
                    <img src={item.data.avatar} alt="" className="photo"/>
                    <div className="content">
                        <div className="name">{item.data.author_name}</div>
                        <div className="time">{item.data.date}</div>
                        <div className="introduce">{item.data.title}</div>
                        <img src={item.data.img} alt=""/>
                        <div className="interact">
                            <div className="fa fa-heart-o"></div>
                            <div className="like">{item.data.praise}</div>
                            <div className="fa fa-commenting-o"></div>
                            <div className="discuss">{item.data.reply_count}</div>
                        </div>
                    </div>
                </div>
            </NavLink>
        ))
    }
    render(){
        return (
            <div>
                {this.renderListcontent()}
            </div>
        )
    }
}
export default GroupState(ListFour,{
    reducer:"find",
    states:["listcontentFour"]
});