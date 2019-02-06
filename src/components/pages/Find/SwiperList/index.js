import React,{Component} from "react"
import "./index.scss"
import Swiper from "swiper"
import GroupState from "../../../../modules/groups"
import {withRouter} from "react-router-dom"
class SwiperList extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            activeId:0
        }
    }
    componentDidMount(){
        this.props.getSwiperList(()=>{
            setTimeout(() => {
                this.initSwiperList();
            }, 10);
        });
    }
    initSwiperList(){
        new Swiper(this.List,{
            slidesPerView: 5,
            spaceBetween: 30,
        })
    }
    handleClick(e){
        document.documentElement.scrollTop = 330;
        let value = e.currentTarget.innerText.trim();//去掉空格
        // console.log(value);
        let {replace} = this.props.history;
        switch (value) {
            case "今日推荐":
                replace("/find/listone");
                break;
            case "最新资讯":
                replace("/find/listtwo");
                break;
            case "测评AllStars":
                replace("/find/listthree");
                break;
            case "潮流风向":
                replace("/find/listfour");
                break;
            default:
                break;
        }
    }  
    componentWillMount(){
        this.props.history.replace("/find/listone")
    }  
    componentWillReceiveProps(props){
        let {pathname} = props.location;
        let index=0;
        if(pathname === "/find/listone"){
            index=0;
        }
        else if (pathname === "/find/listtwo"){
            index = 1;
        }
        else if (pathname === "/find/listthree"){
            index = 2;
        }
        else if (pathname === "/find/listfour"){
            index = 3;
        }
        this.setState({
            activeId:index
        })
    }
    renderList(){
        let {swiperlists} = this.props;
        if(!swiperlists) return "";
        let {activeId} = this.state;
         return swiperlists.map((item,index)=>(
            <div onClick={this.handleClick} key={item.id} className={"swiper-slide " + (activeId===index?"actived":"")}> 
                 <span>{item.title}</span>
             </div>
         ))
    }
    
    render(){
        return (
            <div>
                <div ref={el=>this.List=el} className="swiper-container swiper-list">
                    <div className="swiper-wrapper">
                        {this.renderList()}
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(GroupState(SwiperList,{
    reducer:"find",
    states:["swiperlists"]
}));