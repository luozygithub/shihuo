import React,{Component} from "react"
import "./index.scss"
import Swiper from "swiper"
import GroupState from "../../../../../../modules/groups"
class ListAccount extends Component{
    componentDidMount(){
        this.props.getAccount();
        setTimeout(() => {
            new Swiper('.accountswiper', {
                slidesPerView: 3,
                spaceBetween: 20,
            });
        }, 0);
        
    }
    renderAccount(){
        let {account} = this.props;
        if(!account) return "";
        return account.map(item=>(
            <div key={item.id} className="swiper-slide">
                <img src={item.img} alt=""/>
                <span>{item.title}</span>
            </div>
        ))
    }
    render(){
        return (
            <div className="listaccount">
                <div className="top">
                    <span>欲望清单</span>
                    <span>查看更多></span>
                </div>
                <div className="swiper-container accountswiper">
                    <div className="swiper-wrapper">
                        {this.renderAccount()}
                    </div>
                </div>
                
            </div>
        )
    }
}
export default GroupState(ListAccount,{
    reducer:"discover",
    states:["account"]
})