import React,{Component} from "react"
import "./index.scss"
import HotBanner from "./HotBanner"
class HotTopic extends Component{
    render(){
        return (
            <div className="HotTopic">
                <span className="title">热门话题</span>
                <HotBanner/>
            </div>
        )
    }
}
export default HotTopic;