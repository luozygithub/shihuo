import React,{Component} from "react"
import "./index.scss"
import {NavBar,Icon} from "antd-mobile"
import GroupState from '../../../../../modules/groups'
class Part extends Component{
    renderPartlist(){
        let {partlist} = this.props;
        if (!partlist) return "";
        return partlist.map(item=>{
            return (
                 <div className="Part" key={item.id}>
                        <img src={item.img} alt="" className="img"/>
                        <div className="contents">
                            <span className="spanOne">
                                {item.title}
                            </span>
                            <span className="spanTwo">
                               {item.intro}
                            </span>
                        </div>
                    </div> 
            )
        })
        console.log(this.props)
    
    }
    componentDidMount(){
        // this.initSwiper();
        this.props.getPartList();
        
    }
    render(){
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>{this.props.history.push("/find")}}
                    
                    >栏目</NavBar>
                    {/* <div className="Part">
                        <img src="http://shihuo.hupucdn.com/ucditor/20190126/1080x1080_ed8aeae5d837ae1b821ab9a12a9397db.jpeg?imageView2/0/w/300/h/300/interlace/1" alt="" className="img"/>
                        <div className="contents">
                            <span className="spanOne">
                                潮流穿搭
                            </span>
                            <span className="spanTwo">
                                每周潮物种草 | 满满的都是求生欲！春节&amp;情人节礼物攻略（一）
                            </span>
                        </div>
                    </div> */}
                    {this.renderPartlist()}
            </div>
        )
    }
}
export default GroupState(Part,{
    reducer:"find",
    states:["partlist"]
})