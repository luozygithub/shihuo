import React,{Component} from "react"
import "./index.scss"
import Swiper from "swiper"
class HeaderSwiper extends Component{
    componentDidMount(){
        new Swiper('.container', {
            direction: 'vertical',
            autoplay:true,
            loop:true,
        });
    }
    render(){
        return (
            <div className="headerswiper">
                <div className="logo">HOTTEST</div>
                <div className="swiper-container container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <span>为什么买AJ</span>
                            <span>AJ潮流效应</span>
                        </div>
                        <div className="swiper-slide">
                            <span>球鞋百科知多少</span>
                            <span>乔丹北斗新科技</span>
                        </div>
                        <div className="swiper-slide">
                            <span>编织恒星时代</span>
                            <span>签名鞋logo说</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HeaderSwiper