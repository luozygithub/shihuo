import React,{Component} from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
import {NavBar, Icon} from "antd-mobile"
import Swiper from "swiper"
import Mouth from "./Mouth"
import qs from "qs"
class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow:false,
            goTop:false
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    componentDidMount(){
        new Swiper(this.swiper,{
            loop:true,
            pagination:{
                el:".swiper-pagination"
            }
        });
    }
    render(){
        let content = this.props.location.search.replace("?","")
        let obj = qs.parse(content)
        return (
            <div className="back">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.replace("/home/classifyspecial")}
                    rightContent={[
                        <Icon key="1" type="ellipsis" onClick={this.toggle} />,
                    ]}
                >{obj.name}</NavBar>
                 <div className="toast" style={{display:(this.state.isShow?"":"none")}}>
                    <NavLink to={"/home"}>首页</NavLink>
                    <NavLink to={"/home"}>我的</NavLink>
                </div>
                {this.state.goTop?<div className="goTop" onClick={this.goTop}>go</div>:""}

                <div ref={el=>this.swiper=el} className="swiper-container detail-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img width="100%" src="http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE4MDMvMzAxNi81MWJkYzFmNjBmNTMyN2Y0NDY2ZmZjMjZkMzRjN2Y5Mi5qcGc" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img width="100%" src="http://shihuo.hupucdn.com/def/20181226/06a9308f10466b2a6c155913915277f11545788821.jpg?imageView2/1/w/700/h/700/interlace/1" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="headertitle">
                     <p className="name">{obj.name}</p>
                    <div className="intro">
                        <p>{obj.name}于1985年推出，是耐克第一双以乔丹名字命名的篮球鞋，正是这双鞋...</p>
                        <i>详情 > </i>
                    </div>
                </div>
                <div className="all">
                        <span>全网口碑（8648）</span>


                        <span>识货测评（550）</span>
                </div>
                <div className="select">
                    <div>
                        <span>筛选尺寸</span>
                        <span>选择您的尺寸</span>
                    </div>
                    <div>
                        <span>点击订阅</span>
                        <span>获取最低价</span>
                    </div>
                </div>
                <div className="promise">
                    <div>识货如何做到正确保障？</div>
                    <div>查看详情</div>
                </div>
                <Mouth></Mouth>
            </div>
        )
    }
}
export default Detail