import React,{Component} from "react"
import "./index.scss"
import {Link} from "react-router-dom"
import Swiper from "swiper"
import GroupeState from "../../../../modules/groups"
const Slide = ({data})=>(
    <div className="swiper-slide">
        <a href="" className="kanqiu_href">
        <div className="imgs">
            <img src={data.img} alt="" /></div><p className="name">{data.name}</p>
            <p className="price"><span>¥</span>{data.price}</p>
        </a>
    </div>
)
class Jiukjiu extends Component{
    componentDidMount(){
        this.initSwiper()
    }
    initSwiper(){
        this.swiper = new Swiper(this.jiukjiuB,{
            slidesPerView : 4,
        })
    }
    renderSlide(){
        console.log(this.props.jiukjiu)
        return this.props.jiukjiu.map((item,index)=>(
                <Slide data={item} key={index}/>
            )
        )
    }
    render(){
        return (
            <div className="jiukjiu">
                <div className="tit-block">
                    <b>超值9块9</b>
                    <span>24小时淘不停</span>
                    <div className="fr">
                        <Link to="discount/goddetail" className="kanqiu_href1">更多商品&nbsp;
                            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/more_6ed9489.png" alt=""/>
                        </Link>
                    </div>
                </div>
                {/* swiper */}
  
                <div className="swiper-container" ref={el=>this.jiukjiuB=el}>
                    <div className="swiper-wrapper">
                        {this.renderSlide()}
                    </div>
                </div>


            </div>
        )
    }
}
export default GroupeState(Jiukjiu,{
    reducer:"discounts",
    states:['jiukjiu']
});