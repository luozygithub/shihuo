import React,{Component} from "react"
import "./index.scss"
import {NavBar,Icon} from "antd-mobile"
import GroupState from "../../../../../modules/groups"
import 'antd-mobile/dist/antd-mobile.css';
import qs from "qs"
class Beta extends Component{
    componentWillMount(){
        this.props.getListContent();
        // console.log(this.props)
    }
    renderTextlist(){
        let {listcontents} = this.props;
        if(!listcontents) return "";
       
        return listcontents.map(item=>(
            <div className="Content" key={item.data.img}>
                    <img src={item.data.img} alt="" className="photo"/>
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
        ))
    }
    render(){
        return (
           
            <div>
                 <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>{this.props.history.push("/find")}}
                    
                    >众测</NavBar> 
                    <div className="top">
                        <span>众测报告</span>
                        <a href="">更多报告></a>
                    </div>
                {this.renderTextlist()}
            </div>
        )
    }
}
export default GroupState(Beta,{
    reducer:"find",
    states:["listcontents"]
});