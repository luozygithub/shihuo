import React,{Component} from "react"
import "./index.scss"
import Swiper from "swiper";
import GroupState from "../../../../modules/groups"
import {withRouter} from "react-router-dom"
class NavBar extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state={
            activeId:0
        }
    }
    initSwiper(){
        this.swiper = new Swiper(this.homeNav,{
            slidesPerView: 'auto'
        })
    }
    componentDidMount(){
        //异步请求数据
        if(this.props.navs){ //判断一下仓库里面有没有数据，如果有的话，就不需要再去请求了，直接实例化即可！
            this.initSwiper();
            return false;
        }
        this.props.getHomeNavs(()=>{ //没有数据的时候去请求数据
            setTimeout(() => {
                this.initSwiper();
            }, 0);
        });
    }
    handleClick(e){
        let value = e.currentTarget.innerText;
        let {replace} = this.props.history;
        let index = 0;
        switch (value) {
            case "春节新装":
                replace("/home/news");
                break;
            case "奢侈品":
                replace("/home/luxury");
                break;
            default:
                break;
        }
    }
    componentWillReceiveProps(props){
        let {pathname} = props.location;
        let index = 0;
        if (pathname==="/home/news"){
            index=0;
        } else if (pathname === "/home/luxury"){
            index = 1;
        }
        this.setState({
            activeId: index
        })
    }
    renderSlide(){
        let {navs} = this.props;
        if(!navs) return "";
        let {activeId : active} = this.state;
        return navs.map((item,index)=>(
            <div onClick={this.handleClick} key={item.seat} className={"swiper-slide " + (active===index?"actived":"")}>
                <span>{item.title}</span>
            </div>
        ))
    }
    render(){
        return (
            <div ref={el=>this.homeNav=el} className="swiper-container home-nav-bar">
                <div className="swiper-wrapper">
                   {this.renderSlide()}
                </div>
            </div>
        )
    }
}
export default withRouter(GroupState(NavBar,{
    reducer:"home",
    states:["navs"]
}));