import React,{Component} from "react"
import GroupState from "../../../../../modules/groups"
import "./index.scss"
import Swiper from "swiper"
const SwiperSlide = (props) =>{
    return(
        <div className="swiper-slide swiper-hotslide">
            <img src={props.data.img} alt=""/>
            <div className="blacking" >
                 {props.data.blacking}
            </div>
        </div>
    )
}
class HotBanner extends Component{
    renderHotSlide(){
        // console.log(this.props.hotbanners)
        let {hotbanners} = this.props;
        if(!hotbanners) return "";
        return hotbanners.map(item=>{
            return (
                <SwiperSlide data={item} key={item.id} />
            )
        })
    }
    initSwiper(){
        new Swiper(this.hotbanner,{
            // pagination:{
            //     el:".swiper-pagination",
            //     clickable: true,
            // },
            slidesPerView: 3,
            spaceBetween: 30,
        })
    }
    componentDidMount(){
        // console.log(this)
        console.log(this)
        this.props.getHotBanners(()=>{
                setTimeout(()=>{
                   
                    this.initSwiper();
                },10)
            });
       
        // this.initSwiper();
        // 
    }
    shouldComponentUpdate(props){
        if(this.props.hotbanners !== props.hotbanners){
            return true;
        }
        return false;
    }

    render(){
        console.log(this.props.hotbanners)
        return (
                <div ref={el=>this.hotbanner=el} className="swiper-container swiper-hotbanner">
                    <div className="swiper-wrapper">
                        {this.renderHotSlide()}
                        
                    </div>   
                    {/* <div className="swiper-pagination">

                    </div> */}
            
                </div>
           
        )
    }
}
export default GroupState(HotBanner,{
    reducer:"find",
    states:["hotbanners"]
});