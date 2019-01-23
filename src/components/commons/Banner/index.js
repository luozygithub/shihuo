import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../modules/groups"
import Swiper from "swiper"
class Banner extends Component{
    componentDidMount(){
        this.props.getBanners(()=>{
            setTimeout(() => {
                new Swiper('.banner-container',{
                    loop:true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });   
            }, 0);
            
        });
        
    }
    renderBanners(){
        let {banners} = this.props;
        if(!banners) return ""
        return banners.map(item=>{
            return (
                <div key={item.id} className="swiper-slide"><img width="100%" src={item.img} alt=""/></div>
            )
        })
    }
    render(){
        return (
            <div className="swiper-container banner-container">
                <div className="swiper-wrapper">
                    {this.renderBanners()}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
export default GroupState(Banner,{
    reducer:"discover",
    states:["banners"]
})