import React,{Component} from "react"
import "./index.scss"
class HotActivity extends Component{
    render(){
        return (
            <div className="hotactivity">
                <h3>热门活动</h3>
                <div className="content">
                    <div className="item">
                        <img src="http://shihuo.hupucdn.com/appZone/201811/1019/7e5b5b66171686cf805178be1c793bf0.jpg" alt=""/>
                        <span>短裤</span>
                        <i>低至6.69</i>
                    </div>
                    <div className="item">
                        <img src="http://shihuo.hupucdn.com/appZone/201807/2411/b9541b36f94bfa8c6c51482e7536eb35.jpg" alt=""/>
                        <span>短裤</span>
                        <i>低至6.69</i>
                    </div>
                    <div className="item">
                        <img src="http://shihuo.hupucdn.com/appZone/201811/2311/e5e9c867a2016694abe40d752c81080a.jpg" alt=""/>
                        <span>短裤</span>
                        <i>低至6.69</i>
                    </div>
                </div>
            </div>
        )
    }
}
export default HotActivity