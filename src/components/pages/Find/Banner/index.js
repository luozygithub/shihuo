import React,{Component} from "react"
import "./index.scss"
import Swiper from "swiper"
import GroupState from '../../../../modules/groups'
const SwiperSlideItem = (props) =>{
    return(
        <div className="swiper-slide">
            <img width="100%" src={props.data.url} alt=""/>
        </div>
    )
}
class Banner extends Component{
    renderSlide(){
        let {banners} = this.props;
        if(!banners) return "";
        return banners.map(item=>{
            return (
                <SwiperSlideItem data={item} key={item.id} />
            )
        })
    }
    initSwiper(){
        new Swiper(this.Banner,{
            pagination:{
                el:".swiper-pagination"
            },
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            loop:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        })
    }
    componentDidMount(){
        // this.initSwiper();
        this.props.getFindBanners(()=>{
            setTimeout(()=>{
                this.initSwiper();
            },0)
        });
        
    }
    shouldComponentUpdate(props){
        if(this.props.banners !== props.banners){
            return true;
        }
        return false;
    }
    render(){
        console.log(this)
        return(
            <div ref={el=>this.Banner=el} className="swiper-container">
                <div className="swiper-wrapper">
                    {this.renderSlide()}
                </div>   
                <div className="swiper-pagination">

                </div>
            
            </div>
        )
    }
}
export default GroupState(Banner,{
    reducer:"find",
    states:["banners"]
})