import React,{Component} from "react"
import "./index.scss"
import Swiper from "swiper"
import GroupState from "./../../../modules/groups"
class HeaderBanner extends Component{
    componentDidMount(){
        // console.log(this.props)
        this.initSwiper()
    }
    initSwiper(){
        if(this.swiper)   return false;
        this.swiper = new Swiper(this.banners,{
            autoplay:true,
        })
    }
    renderHeaderBanner(){
        return (
      
            <div className="header-banner">
                <div ref={el=>this.banners=el} className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.props.banners.map((item,index)=>(
                          
                                <div className="swiper-slide" key={index}>
                                    <div className="banner-item-box">
                                        <div className="img-box">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="header-banner-info">
                                            <p className="subtitle">{item.subtitle}</p>
                                            <p className="price">{item.info}</p>
                                        </div>
                                    </div>
                                </div>
                        ))}
                        
                    </div>

                </div>
            </div>

        )
    }
    render(){
        return (
            this.renderHeaderBanner()
        )
    }
}
export default GroupState(HeaderBanner,{
    reducer:"discounts"
});