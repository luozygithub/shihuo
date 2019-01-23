import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../../../modules/groups"
class Recommend extends Component{
    componentDidMount(){
        
        if(!this.props.recommend){
            this.props.getRecommend();
        }
    }
    renderData(){
        if(!this.props.recommend) return "";
        return this.props.recommend.map(item=>{
                return (
                    <div key={item.img} className="all">
                        <div className="left">
                            <img  src={item.img} alt=""/>
                        </div>
                        <div className="right">
                            <span className="title">{item.title}</span>
                            <i className="txt">“{item.intro}”</i>
                            <em className="price">
                                <strong>
                                    {item.merchant}
                                    <i>￥{item.price}</i>
                                </strong>
                                <strong>
                                    看<i>{item.hits}</i>
                                </strong>
                            </em>
                        </div>
                    </div>
                )
            
        })
    }
    render(){
        return (
            <div>
                {this.renderData()}
            </div>
        )
    }
}
export default GroupState(Recommend,{
    reducer:"discover",
    states:["recommend"]
})